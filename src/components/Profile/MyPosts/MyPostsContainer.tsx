import React from "react";
import {
    ActionsType,
    addPostAC,
    changeNewTextAC,
    PostsType,
}
from "../../../redux/store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


type mapStateToPropsType = {
    posts: PostsType[],
    newPostText: string
}

// type mapDispatchToPropsType = {
//     dispatch: (action: ActionsType) => void
// }

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


export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
