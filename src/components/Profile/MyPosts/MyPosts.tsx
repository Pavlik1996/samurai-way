import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"


const MyPosts = () => {

    let postsData = [
        {id: 1, messages: 'Вiтаю', like: 88},
        {id: 2, messages: 'Добры настрой !', like: 88},
        {id: 3, messages: 'П\'ю гарбату з лімонам і мятай.', like: 88},
        {id: 4, messages: 'Збіраюся выйсці на праменад', like: 88},
        {id: 5, messages: 'На вуліцы марозна!', like: 88},
    ]

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
                <Post message={postsData[0].messages} likeCount={postsData[0].like}/>
                <Post message={postsData[1].messages} likeCount={postsData[1].like}/>
                <Post message={postsData[2].messages} likeCount={postsData[2].like}/>
                <Post message={postsData[3].messages} likeCount={postsData[3].like}/>
                <Post message={postsData[4].messages} likeCount={postsData[4].like}/>

            </div>
        </div>

    )
}
export default MyPosts
