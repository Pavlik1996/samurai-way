import s from "./Dialogs.module.css";
import { Message } from "./Message/Message";
import { DialogItem } from "./DialogItem/DialogItem";
import React from "react";
import { MessagesPageType } from "../../redux/store";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

type valueType = {
  newMessageBody: string;
};

export type DialogsPropsType = {
  sendMessage: (value: string) => void;
  dialogsPage: MessagesPageType;
};

export const Dialogs = (props: DialogsPropsType) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id} />
  ));

  const addNewMessage = (value: valueType) => {
    props.sendMessage(value.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <AddMessageForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};
