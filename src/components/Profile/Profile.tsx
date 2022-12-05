import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4mYAeykNjPS5oMZ8-n6lc2my3fgr51M0_Zg&usqp=CAU"
                    alt="porshe"/>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile