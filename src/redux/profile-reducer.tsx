import React from 'react';
import {PostsType, ProfilePageType} from "./store";


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

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypeProfile): ProfilePageType => {
    switch (action.type) {
        case "CHANGE-NEW-TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
        case 'ADD-POST':
            if (state.newPostText.trim() !== '') {
                const newPost: PostsType = {id: 6, messages: state.newPostText, like: 0}
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: '',
                }
            }
            return state
        default:
            return state
    }
};


export type ActionsTypeProfile = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>


export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT", newText: newText
    } as const
}



