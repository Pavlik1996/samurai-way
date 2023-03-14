import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    getUsers,
    toggleIsFollowing,
    unFollow,
    UsersType,
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import witchAuthRedirect from "../../hoc/witchAuthRedirect";
import {compose} from "redux";
import { getCurrentPage, getIsAuth, getIsFetching, getIsFollowing, getItems, getPageSize, getTotalCount } from "../../redux/users-selectors";

type PropsUsersType = mapStateToPropsType & mapStateToDispatchType;

type mapStateToPropsType = {
    items: UsersType[];
    pageSize: number;
    totalCount: number;
    currentPage: number;
    isFetching: boolean;
    isFollowing: number[];
    isAuth: boolean;
};

type mapStateToDispatchType = {
    follow: (id: number) => void;
    unFollow: (id: number) => void;
    toggleIsFollowing: (isFollowing: boolean, id: number) => void;
    getUsers: (currentPage: number, pageSize: number) => void;
};

class UserContainer extends React.Component<PropsUsersType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onClickHandlerChangePage = (page: number) => {
        const {currentPage} = this.props
        this.props.getUsers(page, currentPage);
    };

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                <Users
                    items={this.props.items}
                    pageSize={this.props.pageSize}
                    totalCount={this.props.totalCount}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    currentPage={this.props.currentPage}
                    onClickHandlerChangePage={this.onClickHandlerChangePage}
                    isFollowing={this.props.isFollowing}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        items: getItems(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state),
        isAuth: getIsAuth(state),
    };
};

export const UserComponent = compose(
    connect(mapStateToProps, {
        follow,
        unFollow,
        toggleIsFollowing,
        getUsers,
    }),
    witchAuthRedirect
)(UserContainer);
