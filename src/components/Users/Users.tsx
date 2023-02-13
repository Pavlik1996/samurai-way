import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UserPageType, UsersType} from "../../redux/store";
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsUsersType = {
    items: UsersType[];
    pageSize: number;
    totalCount: number;
    follow: (id: number) => void;
    unFollow: (id: number) => void;
    currentPage: number;
    onClickHandlerChangePage: (page: number) => void;
};

type PostDeleteType = {
    resultCode: number;
    messages: string[];
    data: {};
};

export const Users = (props: PropsUsersType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 30; i++) {
        pages.push(i);
    }

    const followHandler = (id: number) => {
        axios
            .post<PostDeleteType>(
                `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                null,
                {withCredentials: true}
            )
            .then((r) => {
                if (r.data.resultCode === 0) {
                    props.follow(id);
                }
            });
    };
    const unFollowHandler = (id: number) => {
        axios
            .delete<PostDeleteType>(
                `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                {withCredentials: true}
            )
            .then((r) => {
                if (r.data.resultCode === 0) props.unFollow(id);
            });
    };

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
                <div key={el.id} style={{display: "flex"}}>
                    <NavLink to={"/profile/" + el.id}>
                        <img
                            alt={"ava"}
                            className={s.userPhoto}
                            src={el.photos.small !== null ? el.photos.small : userPhoto}
                        />
                    </NavLink>

                    <div>
                        {el.followed ? (
                            <button onClick={() => unFollowHandler(el.id)}>UnFollow</button>
                        ) : (
                            <button onClick={() => followHandler(el.id)}>Follow</button>
                        )}
                    </div>
                    {el.name}
                </div>
            ))}
        </div>
    );
};
