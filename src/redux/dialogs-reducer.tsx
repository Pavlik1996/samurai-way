import React from 'react';
import {ActionsType, MessagesPageType,} from "./store";

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

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
            state.newMessageBody = action.bodyText
            return state
        case "SEND_MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state
        default: return state
    }
};
