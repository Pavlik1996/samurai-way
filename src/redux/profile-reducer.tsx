import React from 'react';
import {ActionsType, PostsType, ProfilePageTpe} from "./state";

export const ProfileReducer = (state: ProfilePageTpe, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {id: 6, messages: action.postText, like: 0}
            state.posts.push(newPost)
            return state
        case "CHANGE-NEW-TEXT":
            state.newPostText = action.newText
            return state
    }
};

