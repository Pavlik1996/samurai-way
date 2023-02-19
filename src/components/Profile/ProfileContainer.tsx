import React, {FC} from "react";
import Profile from "./Profile";
import {ProfileInfoType} from "../../redux/store";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteChildrenProps, withRouter} from "react-router-dom";
import WitchAuthRedirect from "../../hoc/witchAuthRedirect";
import {compose} from "redux";

// type ProfileContainerType = {
//     getUserProfile: (userId: string) => void;
//     profile: ProfileInfoType;
//     match: {
//         isExact: boolean;
//         params: { userId: string };
//         path: string;
//         url: string;
//     };
// };

type PathParamsType = {
    userID: string
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
        let userId = this.props.match?.params.userID;
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

// let AuthRedirectComponent = WitchAuthRedirect(ProfileContainer)
//

//
// let witchUrlDataContainerComponent = withRouter<any, any>(AuthRedirectComponent);
//
// export default connect(mapSTateToProps, {getUserProfile})(
//     witchUrlDataContainerComponent
// );
// export default compose(connect(
//     mapSTateToProps,
//     {getUserProfile}),
//     withRouter,
//     WitchAuthRedirect)(ProfileContainer)

export const ProfileComponent = compose<FC>(connect(
        mapSTateToProps,
        {getUserProfile}),
    withRouter,
    WitchAuthRedirect)(ProfileContainer)
