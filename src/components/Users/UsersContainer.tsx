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
import axios from "axios";
import {Users} from "./Users";

type PropsUsersType = {
    items: UsersType[],
    pageSize: number,
    totalCount: number,
    follow: (id: number) => void,
    unFollow: (id: number) => void,
    setUsers: (users: UsersType[]) => void,
    setCurrentPage: (page: number) => void,
    currentPage: number,
    setTotalUsersCount: (totalPage: number) => void
}

class UsersApiComponent extends React.Component<PropsUsersType> {

    componentDidMount() {
        axios.get<UserPageType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}& count=${this.props.pageSize}`)
            .then(r => {
                this.props.setUsers(r.data.items)
                this.props.setTotalUsersCount(r.data.totalCount)
            })
    }

    onClickHandlerChangePage = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get<UserPageType>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}& count=${this.props.pageSize}`)
            .then(r => {
                this.props.setUsers(r.data.items)
            })
    }

    render() {
        return <Users items={this.props.items}
                      pageSize={this.props.pageSize}
                      totalCount={this.props.totalCount}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
                      currentPage={this.props.currentPage}
                      onClickHandlerChangePage={this.onClickHandlerChangePage}/>
    }
}


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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent)


