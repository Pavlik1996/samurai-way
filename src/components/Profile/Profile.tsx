import React from "react";
import ProfileInfo from "./Profileinfo/Profileinfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfoType} from "../../redux/store";

type ProfileType = {
    profile: ProfileInfoType;
}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile