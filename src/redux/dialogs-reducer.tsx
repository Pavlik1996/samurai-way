import React from 'react';
import {MessagesPageType, MessagesType} from "./store";

let initialState: MessagesPageType = {
    dialogs: [
        {id: 1, name: 'Pasha'},
        {id: 2, name: 'Zhenya'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Masha'},
        {id: 5, name: 'Kot'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'You'},
        {id: 3, message: 'Are'},
        {id: 4, message: 'Allo'},
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionsTypeDialogs): MessagesPageType => {
    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
            return {
                ...state,
                newMessageBody: action.bodyText
            }
        case "SEND_MESSAGE":
            if (state.newMessageBody.trim() !== '') {
                let body: MessagesType = {id: 6, message: state.newMessageBody}
                return {
                    ...state,
                    messages: [...state.messages, body],
                    newMessageBody: ''
                }
            }
            return state
        default:
            return state
    }
};

export type ActionsTypeDialogs = ReturnType<typeof newMessageBodyAC> | ReturnType<typeof sendMessageAC>


export const newMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_BODY", bodyText: body
    } as const
}

export const sendMessageAC = () => {
    return {
        type: "SEND_MESSAGE"
    } as const
}


