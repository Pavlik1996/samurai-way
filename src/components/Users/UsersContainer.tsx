import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import {
  follow,
  setCurrentPage,
  setIsFetching,
  setTotalUsersCount,
  setUsers,
  toggleIsFollowing,
  unFollow,
  UserPageType,
  UsersType,
} from "../../redux/users-reducer";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import { userAPI } from "../../api/api";

type PropsUsersType = {
  items: UsersType[];
  pageSize: number;
  totalCount: number;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  setUsers: (users: UsersType[]) => void;
  setCurrentPage: (page: number) => void;
  currentPage: number;
  setTotalUsersCount: (totalPage: number) => void;
  setIsFetching: (isFetching: boolean) => void;
  toggleIsFollowing: (isFollowing: boolean, id: number) => void;
  isFetching: boolean;
  isFollowing: number[];
};

class UserContainer extends React.Component<PropsUsersType> {
  componentDidMount() {
    this.props.setIsFetching(true);
    userAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onClickHandlerChangePage = (page: number) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(page);
    userAPI.getUsers(page, this.props.pageSize).then((data) => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
    });
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
          toggleIsFollowing={this.props.toggleIsFollowing}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): UserPageType => {
  return {
    items: state.usersPage.items,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    // error: null,
    isFetching: state.usersPage.isFetching,
    isFollowing: state.usersPage.isFollowing,
  };
};

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  toggleIsFollowing,
})(UserContainer);
