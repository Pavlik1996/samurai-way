import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {ProfileInfoType, UserPageType} from "../../redux/store";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

type ProfileContainerType = {
    setUserProfile: (profile: ProfileInfoType) => void
    profile: ProfileInfoType
}


class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        axios.get<ProfileInfoType>(`https://social-network.samuraijs.com/api/1.0/profile/88`)
            .then(r => {
                this.props.setUserProfile(r.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }

}

let mapSTateToProps = (state: AppStateType): { profile: ProfileInfoType } => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapSTateToProps, {setUserProfile})(ProfileContainer)