import React from "react";
import s from "./ProfileInfo.module.css"

type ProfileType = {
    title: string
}

const ProfileInfo = (props: ProfileType) => {
    return (
        <div>
            <div>
                <img className={s.imgTop}
                     src="https://img.freepik.com/premium-photo/winter-landscape-frozen-river-trees-neon-sunset-winter-park-3d-render-raster-illustration_717906-639.jpg?"
                     alt="porshe"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo