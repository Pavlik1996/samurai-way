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

type PropsType = RouteChildrenProps<PathParamsType> &    OwnPropsType;

type MapStatePropsType = {
  profile: ProfileInfoType;
  status: string;
};

type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void;
  getStatus: (userId: string) => void;
  updateStatus: (status: string) => void;
};

type OwnPropsType = MapStatePropsType & MapDispatchPropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match?.params.userId;

    this.props.getUserProfile(userId ? userId : "27631");
    this.props.getStatus(userId ? userId : "27631");
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
  };
};

export const ProfileComponent = compose<FC>(
  connect(mapSTateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);
