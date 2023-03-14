import React from "react";
import { UsersType } from "../../redux/users-reducer";
import { Paginagor } from "../common/Paginator/Paginator";
import { User } from "./User";

type PropsUsersType = {
  items: UsersType[];
  pageSize: number;
  totalCount: number;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  currentPage: number;
  onClickHandlerChangePage: (page: number) => void;
  isFollowing: number[];
};

export const Users: React.FC<PropsUsersType> = ({
  items, pageSize, totalCount, follow, unFollow, currentPage, onClickHandlerChangePage, isFollowing
}) => {

  return (
    <>
      <Paginagor onClickHandlerChangePage={onClickHandlerChangePage} currentPage={currentPage} />
      {items.map(user => <User
        follow={follow}
        isFollowing={isFollowing}
        unFollow={unFollow}
        user={user}
        key={user.id} />
      )}
    </>
  );
};
