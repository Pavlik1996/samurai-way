import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {UserPageType, UsersType} from "../../redux/store";
import {
    ActionsTypeUsers,
    follow,
    setCurrentPage, setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

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
    setIsFetching: (isFetching: boolean) => void
    isFetching: boolean
}

class UserContainer extends React.Component<PropsUsersType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get<UserPageType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}& count=${this.props.pageSize}`)
            .then(r => {
                this.props.setIsFetching(false)
                this.props.setUsers(r.data.items)
                this.props.setTotalUsersCount(r.data.totalCount)
            })
    }

    onClickHandlerChangePage = (page: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(page)
        axios.get<UserPageType>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}& count=${this.props.pageSize}`)
            .then(r => {
                this.props.setIsFetching(false)
                this.props.setUsers(r.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users items={this.props.items}
                   pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   currentPage={this.props.currentPage}
                   onClickHandlerChangePage={this.onClickHandlerChangePage}
            />
        </>
    }
}


const mapStateToProps = (state: AppStateType): UserPageType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        // error: null,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
})(UserContainer)


