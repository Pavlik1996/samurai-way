import React from "react";
import Profile from "./Profile";
import { ProfileInfoType } from "../../redux/store";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import { withRouter } from "react-router-dom";
import { userAPI } from "../../api/api";

type ProfileContainerType = {
  setUserProfile: (userId: string) => void;
  profile: ProfileInfoType;
  match: {
    isExact: boolean;
    params: { userId: string };
    path: string;
    url: string;
  };
};

class ProfileContainer extends React.Component<ProfileContainerType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "22";
    }
    this.props.setUserProfile(userId);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapSTateToProps = (state: AppStateType): { profile: ProfileInfoType } => {
  return {
    profile: state.profilePage.profile,
  };
};

let witchUrlDataContainerComponent = withRouter<any, any>(ProfileContainer);

export default connect(mapSTateToProps, { setUserProfile })(
  witchUrlDataContainerComponent
);
