import React from "react";
import { MessagesPageType } from "./store";

let initialState: MessagesPageType = {
  dialogs: [
    { id: 1, name: "Pasha" },
    { id: 2, name: "Zhenya" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Masha" },
    { id: 5, name: "Kot" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "You" },
    { id: 3, message: "Are" },
    { id: 4, message: "Allo" },
  ],
} as MessagesPageType;

export const dialogsReducer = (
  state: MessagesPageType = initialState,
  action: ActionsTypeDialogs
): MessagesPageType => {
  switch (action.type) {
    case "SEND_MESSAGE":
      let body = action.payload.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export type ActionsTypeDialogs = ReturnType<typeof sendMessageAC>;

export const sendMessageAC = (newMessageBody: string) => {
  return {
    type: "SEND_MESSAGE",
    payload: { newMessageBody },
  } as const;
};
