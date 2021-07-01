import { IChannel, IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import React, { VFC, useEffect } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import useSWR from 'swr';

interface Props {
  eachchannel: IChannel;
}
const EachChannel: VFC<Props> = ({ eachchannel }) => {
  const { workspace } = useParams<{ workspace: string }>();
  const location = useLocation();
  const { data: userData } = useSWR<IUser>('/api/users', fetcher, {
    dedupingInterval: 2000, // 2초
  });
  const date = localStorage.getItem(`${workspace}-${eachchannel.name}`) || 0;
  const { data: count, mutate } = useSWR<number>(
    userData ? `/api/workspaces/${workspace}/channels/${eachchannel.name}/unreads?after=${date}` : null,
    fetcher,
  );

  useEffect(() => {
    if (location.pathname === `/workspace/${workspace}/channel/${eachchannel.name}`) {
      mutate(0);
    }
  }, [mutate, location.pathname, workspace, eachchannel]);

  return (
    <NavLink
      key={eachchannel.name}
      activeClassName="selected"
      to={`/workspace/${workspace}/channel/${eachchannel.name}`}
    >
      <span className={count !== undefined && count > 0 ? 'bold' : undefined}># {eachchannel.name}</span>
      {count !== undefined && count > 0 && <span className="count">{count}</span>}
    </NavLink>
  );
};

export default EachChannel;
