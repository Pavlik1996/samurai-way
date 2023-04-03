import React, {ChangeEvent} from "react";
import s from "./ProfileInfo.module.css";
import {ProfileInfoType} from "../../../redux/store";
import {ProfileStatusWitchHooc} from "./ProfileStatusWitchHooc";
import userPhoto from '../../../assets/images/user.jpg'

type ProfileType = {
    isOwner: boolean
    profile: ProfileInfoType;
    status: string;
    updateStatus: (status: string) => void;
    savePhotoTC: (file: any) => void

};

const ProfileInfo: React.FC<ProfileType> = ({profile, status, updateStatus, isOwner, savePhotoTC}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhotoTC(e.target.files[0])
        }
    }

    debugger

    return (
        <div>
            <div className={s.descriptionBlock}>

                <img alt={"ava"} src={profile.photos.large || userPhoto} className={s.mainPhoto}/>

                {
                    isOwner && <input type={'file'} onChange={onChangeHandler}/>
                }

                <ProfileStatusWitchHooc
                    status={status}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    );
};

export default ProfileInfo;
