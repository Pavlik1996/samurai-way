import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {ProfileInfoType, UserPageType} from "../../redux/store";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";

type ProfileContainerType = {
    setUserProfile: (profile: ProfileInfoType) => void
    profile: ProfileInfoType
    match: {
        isExact: boolean
        params: { userId: string }
        path: string
        url: string
    }
}

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = '88'
        }
        axios.get<ProfileInfoType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

let witchUrlDataContainerComponent = withRouter<any, any>(ProfileContainer)


export default connect(mapSTateToProps, {setUserProfile})(witchUrlDataContainerComponent)