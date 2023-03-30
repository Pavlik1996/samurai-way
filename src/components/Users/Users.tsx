import React from "react";
import {UsersType} from "../../redux/users-reducer";
// import { Paginagor } from "../common/Paginator/Paginator";
import {User} from "./User";
import {Pagination, Select} from '@mui/material'


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
                                                    items,
                                                    pageSize,
                                                    totalCount,
                                                    follow,
                                                    unFollow,
                                                    currentPage,
                                                    onClickHandlerChangePage,
                                                    isFollowing
                                                }) => {



    const onChangeCallback = (event: any, page: number) => {
        onClickHandlerChangePage(page)
    }


    return (
        <>
            {/*<Paginagor onClickHandlerChangePage={onClickHandlerChangePage} currentPage={currentPage} />*/}

            <Pagination
                page={currentPage}
                count={ Math.ceil(totalCount / 10)}
                onChange={onChangeCallback}
                color="secondary"
                boundaryCount={2}
                style={{display: 'flex', justifyContent: 'center'}}
            />


            {items.map(user => <User
                follow={follow}
                isFollowing={isFollowing}
                unFollow={unFollow}
                user={user}
                key={user.id}/>
            )}
        </>
    );
};
