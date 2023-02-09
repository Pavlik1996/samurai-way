import React from 'react';
import {PostsType, ProfileInfoType, ProfilePageType} from "./store";

let initialState: ProfilePageType = {
    posts: [
        {id: 1, messages: 'Вiтаю', like: 88},
        {id: 2, messages: 'Добры настрой !', like: 88},
        {id: 3, messages: 'П\'ю гарбату з лімонам і мятай.', like: 88},
        {id: 4, messages: 'Збіраюся выйсці на праменад', like: 88},
        {id: 5, messages: 'На вуліцы марозна!', like: 88},
    ],
    newPostText: '',
    profile: {
        "aboutMe": "я круто чувак 1001%",
        "contacts": {
            "facebook": "facebook.com",
            "website": null,
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": null,
            "github": "github.com",
            "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "не ищу, а дурачусь",
        "fullName": "samurai dimych",
        "userId": 2,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    }
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
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
};


export type ActionsTypeProfile =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof setUserProfile>

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

export const setUserProfile = (profile: ProfileInfoType) => {
    return {
        type: 'SET-USER-PROFILE', profile
    } as const
}



