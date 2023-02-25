import React from "react";
import s from "./ProfileInfo.module.css";
import { ProfileInfoType } from "../../../redux/store";
import { ProfileStatus } from "./ProfileStatus";

type ProfileType = {
  profile: ProfileInfoType;
  status: string;
  updateStatus: (status: string) => void;
};

const ProfileInfo = (props: ProfileType) => {
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img alt={"ava"} src={props.profile.photos.large} />
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
