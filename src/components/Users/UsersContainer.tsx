import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {UserPageType, UsersType} from "../../redux/store";
import {
    ActionsTypeUsers,
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/users-reducer";
import Users from "./Users";


const mapStateToProps = (state: AppStateType): UserPageType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        error: null
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypeUsers) => void) => {
    return {

        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalPage: number) => {
            dispatch(setTotalUsersCountAC(totalPage))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


