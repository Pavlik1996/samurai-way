import React from "react";
import classes from "./Profile.module.css"
const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4mYAeykNjPS5oMZ8-n6lc2my3fgr51M0_Zg&usqp=CAU"
                    alt="porshe"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>New post</div>
            </div>
            <div className="post">
                <div className={classes.item}>
                    post1
                </div>
                <div className={classes.item}>
                    post2
                </div>
                <div className={classes.item}>
                    post3
                </div>
            </div>
        </div>
    )
}

export default Profile