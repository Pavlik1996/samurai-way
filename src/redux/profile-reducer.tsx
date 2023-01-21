import React from 'react';
import {ActionsType, PostsType, ProfilePageType} from "./store";


let initialState: ProfilePageType = {
    posts: [
        {id: 1, messages: 'Вiтаю', like: 88},
        {id: 2, messages: 'Добры настрой !', like: 88},
        {id: 3, messages: 'П\'ю гарбату з лімонам і мятай.', like: 88},
        {id: 4, messages: 'Збіраюся выйсці на праменад', like: 88},
        {id: 5, messages: 'На вуліцы марозна!', like: 88},
    ],
    newPostText: 'it-kamasutra.com'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {id: 6, messages: action.postText, like: 0}
            state.posts.push(newPost)
            return state
        case "CHANGE-NEW-TEXT":
            state.newPostText = action.newText
            return state
        default: return state
    }
};

