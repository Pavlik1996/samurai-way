import React from "react";
import classes from "./ProfileInfo.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";

type ProfileType = {
    title: string
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo title={"ProfileInfo"}/>
            <MyPosts/>
        </div>
    )
}

export default Profile