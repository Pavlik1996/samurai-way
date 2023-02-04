import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {UsersType} from "../../redux/store";
import {ActionsTypeUsers, followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";
import Users from "./Users";


const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.items
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


