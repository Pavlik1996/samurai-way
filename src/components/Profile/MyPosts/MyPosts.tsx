import React, {ChangeEvent} from "react";
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

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.updateNewPostText(newText)
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
                            value={props.newPostText}
                        />
                    </div>
                    <div>
                        <button
                            onClick={onAddPost}
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
