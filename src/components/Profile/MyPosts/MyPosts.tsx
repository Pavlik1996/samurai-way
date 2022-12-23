import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import post from "./Post/Post";


const MyPosts = () => {

    let posts= [
        {id: 1, messages: 'Вiтаю', like: 88},
        {id: 2, messages: 'Добры настрой !', like: 88},
        {id: 3, messages: 'П\'ю гарбату з лімонам і мятай.', like: 88},
        {id: 4, messages: 'Збіраюся выйсці на праменад', like: 88},
        {id: 5, messages: 'На вуліцы марозна!', like: 88},
    ]

    let postsElements = posts.map(p => <Post message={p.messages} likeCount={p.like}/>)

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

                {postsElements}

            </div>
        </div>

    )
}
export default MyPosts
