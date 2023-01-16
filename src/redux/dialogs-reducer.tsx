import React from 'react';
import {ActionsType, MessagesPageType} from "./state";

export const DialogsReducer = (state: MessagesPageType, action: ActionsType) => {
    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
            state.newMessageBody = action.bodyText
            return state
        case "SEND_MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state
    }
};
