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
               <Post message={"Вiтаю"} likeCount={13}/>
               <Post message={"Добры настрой !"} likeCount={77}/>
               <Post message={"П'ю гарбату з лімонам і мятай."} likeCount={15}/>
               <Post message={"Збіраюся выйсці на праменад"} likeCount={99}/>
               <Post message={"На вуліцы марозна!"} likeCount={88}/>
        </div>

    )
}
export default MyPosts
