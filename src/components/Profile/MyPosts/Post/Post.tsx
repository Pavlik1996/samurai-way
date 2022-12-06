import React from "react";
import classes from "./Post.module.css"

type MessageType = {
    message: string
    likeCount: number
}

const Post = (props:MessageType) => {
    return (
        <div className={classes.item}>
            <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
            alt="ava"/>
            {props.message}
            <div>
                <span> {props.likeCount} Like</span>
            </div>
        </div>
    )
}
export default Post
