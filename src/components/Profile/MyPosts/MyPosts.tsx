import React from "react";
import Post from "./Post/Post";
const MyPosts = () => {
    return (
        <div>
            <div>
                My post
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
            </div>
               <Post/>
               <Post/>
               <Post/>
               <Post/>
        </div>

    )
}
export default MyPosts
