import React from "react";
import ProfileInfo from "./Profileinfo/Profileinfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";

const Profile = () => {

    return (
        <div>
            <ProfileInfo
                title={"ProfileInfo"}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile