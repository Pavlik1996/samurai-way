import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

type ProfileType = {
    title: string
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <div>
                <img className={classes.imgTop}
                     src="https://img.freepik.com/premium-photo/winter-landscape-frozen-river-trees-neon-sunset-winter-park-3d-render-raster-illustration_717906-639.jpg?"
                     alt="porshe"/>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile