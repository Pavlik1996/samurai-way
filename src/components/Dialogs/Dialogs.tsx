import s from "./Dialogs.module.css";
import { Message } from "./Message/Message";
import { DialogItem } from "./DialogItem/DialogItem";
import React from "react";
import { MessagesPageType } from "../../redux/store";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

type valueType = {
  newMessageBody: string;
};

const AddMessageForm: React.FC<InjectedFormProps<valueType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={"textarea"}
        name={"newMessageBody"}
        placeholder={"enter tour message"}
      />
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm<valueType>({
  form: "DialogAddMessageForm",
})(AddMessageForm);

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
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};
