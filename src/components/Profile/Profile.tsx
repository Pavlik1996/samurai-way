import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";
import {ProfilePageTpe} from "../../redux/state";


type ProfileType = {
    profilePage: ProfilePageTpe
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo
                title={"ProfileInfo"}/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile