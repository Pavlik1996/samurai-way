import React from "react";
import ProfileInfo from "./Profileinfo/Profileinfo";
import { MyPostContainer } from "./MyPosts/MyPostsContainer";
import { ProfileInfoType } from "../../redux/store";

type ProfileType = {
  profile: ProfileInfoType;
  status: string;
  updateStatus: (status: string) => void;
};

const Profile = (props: ProfileType) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostContainer />
    </div>
  );
};

export default Profile;
