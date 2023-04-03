import React from "react";
import {Dispatch} from "redux";
import {profileAPI, ResultCode} from "../api/api";
import {PostsType, ProfileInfoType, ProfilePageType} from "./store";

let initialState: ProfilePageType = {
    posts: [
        {id: 1, messages: "Вiтаю", like: 88},
        {id: 2, messages: "Добры настрой !", like: 88},
        {id: 3, messages: "П'ю гарбату з лімонам і мятай.", like: 88},
        {id: 4, messages: "Збіраюся выйсці на праменад", like: 88},
        {id: 5, messages: "На вуліцы марозна!", like: 88},
    ],
    newPostText: "",
    profile: {
        aboutMe: "я круто чувак 1001%",
        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: "",
            github: "github.com",
            mainLink: null,
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: 27631,
        photos: {small: "", large: ""},
    },
    status: "",
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypeProfile): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: 6,
                messages: action.payload.myPostMessage,
                like: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile};
        }
        case "SET-STATUS": {
            return {...state, status: action.status};
        }
        case "DELETE-POST": {
            return {...state, posts: state.posts.filter(el => el.id !== action.prostId)}
        }
        case "SAVE-PHOTO": {
            debugger
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
};

export type ActionsTypeProfile =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof savePhotoAC>
    | ReturnType<typeof deletePost>;

export const addPostAC = (myPostMessage: string) => {
    return {
        type: "ADD-POST",
        payload: {myPostMessage},
    } as const;
};

export const setUserProfile = (profile: ProfileInfoType) => {
    return {
        type: "SET-USER-PROFILE",
        profile,
    } as const;
};

export const setStatus = (status: string) => {
    return {
        type: "SET-STATUS",
        status,
    } as const;
};

export const deletePost = (prostId: number) => {
    return {
        type: "DELETE-POST",
        prostId,
    } as const;
};

export const savePhotoAC = (photos: { small: string, large: string }) => {
    return {
        type: 'SAVE-PHOTO',
        photos
    } as const
}


export const getStatus = (userId: string) => async (dispatch: Dispatch<ActionsTypeProfile>) => {
    const r = await profileAPI.getStatus(userId)
    dispatch(setStatus(r.data));
};

export const updateStatus = (status: string) => async (dispatch: Dispatch<ActionsTypeProfile>) => {
    const r = await profileAPI.updateStatus(status)
    if (r.data.resultCode === ResultCode.OK) dispatch(setStatus(status));
};

export const getUserProfile = (userId: string) => async (dispatch: Dispatch<ActionsTypeProfile>) => {
    const r = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(r.data));
};

export const savePhotoTC = (file: any) => async (dispatch: Dispatch<ActionsTypeProfile>) => {
    const res = await profileAPI.savePhoto(file)
    dispatch(savePhotoAC(res.data.data))
}

