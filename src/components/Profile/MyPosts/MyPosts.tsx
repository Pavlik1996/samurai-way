import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"


const MyPosts = () => {
    return (
        <div className={s.pastBlock}>
            <div>
                <h3>
                    My post
                </h3>
                <div>
                    <div>
                        <textarea></textarea>

                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={"Вiтаю"} likeCount={13}/>
                <Post message={"Добры настрой !"} likeCount={77}/>
                <Post message={"П'ю гарбату з лімонам і мятай."} likeCount={15}/>
                <Post message={"Збіраюся выйсці на праменад"} likeCount={99}/>
                <Post message={"На вуліцы марозна!"} likeCount={88}/>
            </div>
        </div>

    )
}
export default MyPosts
