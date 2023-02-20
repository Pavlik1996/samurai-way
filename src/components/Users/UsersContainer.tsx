import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import {
  follow,
  getUsers,
  setCurrentPage,
  toggleIsFollowing,
  unFollow,
  UsersType,
} from "../../redux/users-reducer";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import witchAuthRedirect from "../../hoc/witchAuthRedirect";
import { compose } from "redux";

type PropsUsersType = {
  items: UsersType[];
  pageSize: number;
  totalCount: number;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  setCurrentPage: (page: number) => void;
  currentPage: number;
  toggleIsFollowing: (isFollowing: boolean, id: number) => void;
  isFetching: boolean;
  isFollowing: number[];
  getUsers: (currentPage: number, pageSize: number) => void;
};

class UserContainer extends React.Component<PropsUsersType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.currentPage);
  }

  onClickHandlerChangePage = (page: number) => {
    this.props.getUsers(page, this.props.currentPage);
  };

  render() {
    return (
      <>
        {this.props.isFetching && <Preloader />}
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

const mapStateToProps = (state: AppStateType) => {
  return {
    items: state.usersPage.items,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowing: state.usersPage.isFollowing,
  };
};

export const UserComponent = compose(
  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleIsFollowing,
    getUsers,
  }),
  witchAuthRedirect
)(UserContainer);
