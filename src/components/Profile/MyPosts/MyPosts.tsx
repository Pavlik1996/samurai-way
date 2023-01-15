import React, {ChangeEvent, useState} from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {ActionsType} from "../../../redux/state";

type MyPostsType = {
    posts: PostsType[]
    // addPost: (postText: string) => void
    // updateNewPostText: (newText: string) => void
    newPostText: string
    dispatch: (action: ActionsType) => void
}
type PostsType = {
    id: number,
    messages: string,
    like: number
}

const MyPosts = (props: MyPostsType) => {
    const postsElements = props.posts.map(p => <Post message={p.messages} likeCount={p.like}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const [text, setText] = useState('')

    const addPost = () => {
        props.dispatch({type: "ADD-POST", postText: text})
        setText('')
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }

    return (
        <div className={s.pastBlock}>
            <div>
                <h3>
                    My post
                </h3>
                <div>
                    <div>
                        <textarea
                            onChange={onPostChange}
                            // ref={newPostElement}
                            value={text}
                        />
                    </div>
                    <div>
                        <button
                            onClick={addPost}
                        >Add post
                        </button>
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
