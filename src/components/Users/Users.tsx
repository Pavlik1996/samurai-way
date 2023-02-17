import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";
import { UsersType } from "../../redux/users-reducer";

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

export const Users = (props: PropsUsersType) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= 30; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((el) => {
          return (
            <span
              key={el}
              onClick={() => props.onClickHandlerChangePage(el)}
              className={props.currentPage === el ? s.selected : ""}
            >
              {` ${el} `}
            </span>
          );
        })}
        <span>{pagesCount}</span>
      </div>
      {props.items.map((el) => (
        <div key={el.id} style={{ display: "flex" }}>
          <NavLink to={"/profile/" + el.id}>
            <img
              alt={"ava"}
              className={s.userPhoto}
              src={el.photos.small !== null ? el.photos.small : userPhoto}
            />
          </NavLink>

          <div>
            {el.followed ? (
              <button
                disabled={props.isFollowing.some((id) => id === el.id)}
                onClick={() => props.unFollow(el.id)}
              >
                UnFollow
              </button>
            ) : (
              <button
                disabled={props.isFollowing.some((id) => id === el.id)}
                onClick={() => props.follow(el.id)}
              >
                Follow
              </button>
            )}
          </div>
          {el.name}
        </div>
      ))}
    </div>
  );
};
