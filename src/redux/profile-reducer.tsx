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
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {id: 6, messages: state.newPostText, like: 0}
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        case "CHANGE-NEW-TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
};

