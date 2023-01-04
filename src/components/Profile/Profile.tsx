import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";
import {PostsType, ProfilePageTpe} from "../../redux/state";


type ProfileType = {
    title: string
    state: ProfilePageTpe
    addPost: (title: string) => void
}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo title={"ProfileInfo"}/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile