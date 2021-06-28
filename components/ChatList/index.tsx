import { IChat, IDM } from '@typings/db';
import React, { useRef, useCallback, VFC, forwardRef, MutableRefObject } from 'react';
import { ChatZone, Section, StickyHeader } from './styles';
import { Scrollbars } from 'react-custom-scrollbars';
import Chat from '@components/Chat';
interface Props {
  chatSections: { [key: string]: (IDM | IChat)[] };
  setSize: (f: (size: number) => number) => Promise<IDM[][] | IChat[][] | undefined>;
  isReachingEnd: boolean;
}

// forwardRef : 다른 컴포넌트에서 ref를 사용하고 싶을 때

const ChatList = forwardRef<Scrollbars, Props>(({ chatSections, setSize, isReachingEnd }, scrollRef) => {
  const onScroll = useCallback((values) => {
    if (values.scrollTop === 0 && !isReachingEnd) {
      setSize((prevSize: number) => prevSize + 1).then(() => {
        const current = (scrollRef as MutableRefObject<Scrollbars>)?.current;
        if (current) {
          current.scrollTop(current.getScrollHeight() - values.scrollHeight);
        }
      });
    }
  }, []);
  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollRef} onScrollFrame={onScroll}>
        {/* 객체를 map 할 때 entries 사용 */}
        {Object.entries(chatSections).map(([date, chats]) => {
          console.log('chatSections ==> ', chatSections);
          return (
            <Section className={`section-${date}`} key={date}>
              <StickyHeader>
                <button>{date}</button>
              </StickyHeader>
              {chats.map((chat) => (
                <Chat key={chat.id} data={chat} />
              ))}
            </Section>
          );
        })}
      </Scrollbars>
    </ChatZone>
  );
});

export default ChatList;
