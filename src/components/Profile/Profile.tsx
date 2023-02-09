import React, {ReactNode} from "react";
import ProfileInfo from "./Profileinfo/Profileinfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfoType} from "../../redux/store";

type ProfileType = {
    children?: ReactNode;
    profile: ProfileInfoType
}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                title={"ProfileInfo"}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile