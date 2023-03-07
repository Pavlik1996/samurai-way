import React, { FC } from "react";
import Profile from "./Profile";
import { ProfileInfoType } from "../../redux/store";
import { connect } from "react-redux";
import {
  getStatus,
  getUserProfile,
  updateStatus,
} from "../../redux/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import { RouteChildrenProps, withRouter } from "react-router-dom";
import { compose } from "redux";

type PathParamsType = {
  userId: string;
};

type PropsType = RouteChildrenProps<PathParamsType> & OwnPropsType;

type MapStatePropsType = {
  profile: ProfileInfoType;
  status: string;
  authrorizedUserId: any;
  isAuth: boolean;
};

type MapDispatchPropsType = {
  getUserProfile: (userId: any) => void;
  getStatus: (userId: any) => void;
  updateStatus: (status: string) => void;
};

type OwnPropsType = MapStatePropsType & MapDispatchPropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match?.params.userId;

    if (!userId) {
      userId = this.props.authrorizedUserId;
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let mapSTateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authrorizedUserId: state.auth.data.id,
    isAuth: state.auth.isAuth,
  };
};

export const ProfileComponent = compose<FC>(
  connect(mapSTateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);
