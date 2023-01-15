import React, {ChangeEvent, useState} from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

type MyPostsType = {
    posts: PostsType[]
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}
type PostsType = {
    id: number,
    messages: string,
    like: number
}

const MyPosts = (props: MyPostsType) => {
    const postsElements = props.posts.map(p => <Post message={p.messages} likeCount={p.like}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        if (newPostElement.current?.value) {
            const text = newPostElement.current?.value
            props.updateNewPostText(text)
        }
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
                            ref={newPostElement}
                            value={props.newPostText}
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
