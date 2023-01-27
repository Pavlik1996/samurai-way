import React from "react";
import {
    ActionsType,
    addPostAC,
    changeNewTextAC, MessagesPageType,
    newMessageBodyAC, PostsType, ProfilePageType,
    sendMessageAC,
    StoreType
} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


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
                            store.dispatch(addPostAC())
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


type mapStateToPropsType = {
    posts: PostsType[],
    newPostText: string
}

type mapDispatchToPropsType = {
    dispatch: (action: ActionsType) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        addPost: () => {
                dispatch(addPostAC())
        },
        updateNewPostText: (newText: string) => {
            dispatch(changeNewTextAC(newText))
        }
    }
}


export const MyPostContainerSuper = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
