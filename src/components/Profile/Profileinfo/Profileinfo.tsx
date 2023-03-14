import React from "react";
import s from "./ProfileInfo.module.css";
import { ProfileInfoType } from "../../../redux/store";
import { ProfileStatusWitchHooc } from "./ProfileStatusWitchHooc";

type ProfileType = {
  profile: ProfileInfoType;
  status: string;
  updateStatus: (status: string) => void;
};

const ProfileInfo: React.FC<ProfileType> = ({profile, status, updateStatus}) => {
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img alt={"ava"} src={profile.photos.large} />
        <ProfileStatusWitchHooc
          status={status}
          updateStatus={updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
