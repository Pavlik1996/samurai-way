import React from "react";
import ProfileInfo from "./Profileinfo/Profileinfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/store";

type ProfileType = {
    store: StoreType
}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo
                title={"ProfileInfo"}/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile