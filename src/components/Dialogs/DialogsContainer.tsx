import {

    newMessageBodyAC,
    sendMessageAC,
    StoreType
} from "../../redux/store";
import React from "react";
import {Dialogs} from "./Dialogs";


type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {

    const dialogsPage = props.store.getState().dialogsPage


    const sendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onChangeHandler = (body: string) => {
        props.store.dispatch(newMessageBodyAC(body))
    }

    return <Dialogs dialogsPage={dialogsPage} newMessageBodyAC={onChangeHandler} sendMessage={sendMessage}/>
}