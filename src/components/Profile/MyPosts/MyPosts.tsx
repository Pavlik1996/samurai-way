import React from "react";
import Post from "./Post/Post";



const MyPosts = () => {
    const textMessage_1: string = "Вiтаю"
    const textMessage_2: string = "Добры настрой !"
    const textMessage_3: string = "П'ю гарбату з лімонам і мятай."
    const textMessage_4: string = "Збіраюся выйсці на праменад"
    const textMessage_5: string = "На вуліцы марозна!"

    return (
        <div>
            <div>
                My post
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
            </div>
               <Post message={textMessage_1} likeCount={13}/>
               <Post message={textMessage_2} likeCount={77}/>
               <Post message={textMessage_3} likeCount={15}/>
               <Post message={textMessage_4} likeCount={99}/>
               <Post message={textMessage_5} likeCount={88}/>
        </div>

    )
}
export default MyPosts
