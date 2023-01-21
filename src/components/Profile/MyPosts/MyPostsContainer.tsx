import React from "react";
import {addPostAC, changeNewTextAC, StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


// type MyPostsContainerType = {
//     store: StoreType
// }

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState()
                    const newMessage = state.profilePage.newPostText

                    const addPost = () => {
                        if (newMessage.trim() !== '') {
                            store.dispatch(addPostAC(newMessage))
                        }
                    }

                    const onPostChange = (newText: string) => {
                        store.dispatch(changeNewTextAC(newText))
                    }

                    return (
                        <MyPosts posts={store.getState().profilePage.posts}
                                 updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 newPostText={store.getState().profilePage.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )

}
