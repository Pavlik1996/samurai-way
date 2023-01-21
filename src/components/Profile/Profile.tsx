import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";
import {ActionsType, ProfilePageType} from "../../redux/store";


type ProfileType = {
    profilePage: ProfilePageType
    // addPost: (postText: string) => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsType) => void
}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo
                title={"ProfileInfo"}/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                // addPost={props.addPost}
                // updateNewPostText={props.updateNewPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile