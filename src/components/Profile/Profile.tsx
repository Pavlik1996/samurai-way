import React from "react";
import ProfileInfo from "./Profileinfo/Profileinfo";
import {MyPostContainerSuper, MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/store";

// type ProfileType = {
//     store: StoreType
// }

const Profile = () => {

    return (
        <div>
            <ProfileInfo
                title={"ProfileInfo"}/>
            <MyPostContainerSuper/>
        </div>
    )
}

export default Profile