import React from "react";
import {addPostAC, changeNewTextAC, StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";


type MyPostsContainerType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerType) => {

    let state = props.store.getState()

    const newMessage = state.profilePage.newPostText

    const addPost = () => {
        if (newMessage.trim() !== '') {
            props.store.dispatch(addPostAC(newMessage))
        }
    }

    const onPostChange = (newText: string) => {
        props.store.dispatch(changeNewTextAC(newText))
    }

    return <MyPosts posts={state.profilePage.posts}
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    newPostText={state.profilePage.newPostText}
    />

}
