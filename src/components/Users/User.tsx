import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";
import { UsersType } from "../../redux/users-reducer";

type PropsUsersType = {
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  isFollowing: number[];
  user: UsersType
};

export const User: React.FC<PropsUsersType> = ({ follow, unFollow, isFollowing, user }) => {
  return (
    <div>
      <div key={user.id} style={{ display: "flex" }}>
        <NavLink to={"/profile/" + user.id}>
          <img
            alt={"ava"}
            className={s.userPhoto}
            src={user.photos.small !== null ? user.photos.small : userPhoto}
          />
        </NavLink>

        <div>
          {user.followed
            ? <button
              disabled={isFollowing.some((id) => id === user.id)}
              onClick={() => unFollow(user.id)}
            > UnFollow
            </button>
            : <button
              disabled={isFollowing.some((id) => id === user.id)}
              onClick={() => follow(user.id)}
            > Follow
            </button>
          }
        </div>
        {user.name}
      </div>
    </div>
  );
};
