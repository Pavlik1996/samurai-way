import React from "react";
import { addPostAC, deletePost, profileReducer } from "../redux/profile-reducer";
import { ProfilePageType } from "../redux/store";

let initialState: ProfilePageType = {
    posts: [
      { id: 1, messages: "Вiтаю", like: 88 },
      { id: 2, messages: "Добры настрой !", like: 88 },
      { id: 3, messages: "П'ю гарбату з лімонам і мятай.", like: 88 },
      { id: 4, messages: "Збіраюся выйсці на праменад", like: 88 },
      { id: 5, messages: "На вуліцы марозна!", like: 88 },
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
      photos: {
        small: "",
        large: "",
      },
    },
    status: "",
  };

test('new post shold be added', () => {
    //1. start test date
    let action = addPostAC('newPostText')
    // 2. action
    let newState = profileReducer(initialState, action)
    // 3. expectation
    expect(newState.posts.length).toBe(6)
})

test('new post text shold be correct', () => {
    //1. start test date
    let action = addPostAC('newPostText')
    // 2. action
    let newState = profileReducer(initialState, action)
    // 3. expectation
    expect(newState.posts[5].messages).toBe('newPostText')
})

test('new post likes count shold be correct', () => {
    //1. start test date
    let action = addPostAC('newPostText')
    // 2. action
    let newState = profileReducer(initialState, action)
    // 3. expectation
    expect(newState.posts[5].like).toBe(0)
})

test('after deleting length of messages should be decrement', () => {
    //1. start test date
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(initialState, action)
    // 3. expectation
    expect(newState.posts.length).toBe(4)
})


test(`after deleting length of messages should be decrement if id is incorrect`, () => {
    //1. start test date
    let action = deletePost(16544)
    // 2. action
    let newState = profileReducer(initialState, action)
    // 3. expectation
    expect(newState.posts.length).toBe(5)
})