import { IUser, IUserWithOnline } from '@typings/db';
import fetcher from '@utils/fetcher';
import React, { VFC } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import useSWR from 'swr';

interface Props {
  member: IUserWithOnline;
  onlineList: number[];
}

const EachDM: VFC<Props> = ({ member, onlineList }) => {
  const isOnline = onlineList.includes(member.id);
  const { workspace } = useParams<{ workspace: string }>();
  const { data: userData } = useSWR<IUser>('/api/users', fetcher, {
    dedupingInterval: 2000, // 2초
  });
  const date = localStorage.getItem(`${workspace}-${member.id}`);
  console.log('THIS DATE_>', date);
  const { data: count, mutate } = useSWR<number>(
    userData ? `/api/workspaces/${workspace}/dms/${member.id}/unreads?after=${date}` : null,
    fetcher,
  );

  return (
    <NavLink key={member.id} activeClassName="selected" to={`/workspace/${workspace}/dm/${member.id}`}>
      <span>{isOnline ? 'O' : 'X'}</span>
      <span className={count !== undefined && count > 0 ? 'bold' : undefined}># {member.nickname}</span>
      {count !== undefined && count > 0 && <span className="count">{count}</span>}
      {member.id === userData?.id && <span> (나)</span>}
    </NavLink>
  );
};

export default EachDM;
