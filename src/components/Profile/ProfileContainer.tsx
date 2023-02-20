import React, {FC} from "react";
import Profile from "./Profile";
import {ProfileInfoType} from "../../redux/store";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteChildrenProps, withRouter} from "react-router-dom";
import WitchAuthRedirect from "../../hoc/witchAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
type PropsType = RouteChildrenProps<PathParamsType> & OwnPropsType
type MapStatePropsType = {
    profile: ProfileInfoType;
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void;
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match?.params.userId;
        if (!userId) {
            userId = "22";
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        );
    }
}

let mapSTateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    };
};

export const ProfileComponent = compose<FC>(
    connect(mapSTateToProps, {getUserProfile}),
    withRouter)(ProfileContainer)
