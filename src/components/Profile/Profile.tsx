import React from "react";
import ProfileInfo from "./Profileinfo/Profileinfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfoType} from "../../redux/store";

type ProfileType = {
    isOwner: boolean
    profile: ProfileInfoType;
    status: string;
    updateStatus: (status: string) => void;
    savePhotoTC: (file: any) => void
};

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhotoTC={props.savePhotoTC}
            />
            <MyPostContainer/>
        </div>
    );
};

export default Profile;
