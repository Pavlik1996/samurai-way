import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileInfoType} from "../../../redux/store";

type ProfileType = {
    title: string
    profile: ProfileInfoType
}

const ProfileInfo = (props: ProfileType) => {
    return (
        <div>
            <div>
                <img className={s.imgTop}
                     src="https://img.freepik.com/premium-photo/winter-landscape-frozen-river-trees-neon-sunset-winter-park-3d-render-raster-illustration_717906-639.jpg?"
                     alt="photo"/>
            </div>
            <div className={s.descriptionBlock}>
                <img alt={'ava'} src={props.profile.photos.large}/>
                <span>{props.profile.fullName}</span>
                <span>{props.profile.aboutMe}</span>
                <span>{props.profile.contacts.vk}</span>
                <span>{props.profile.contacts.twitter}</span>
                <span>{props.profile.contacts.mainLink}</span>
            </div>
        </div>
    )
}

export default ProfileInfo