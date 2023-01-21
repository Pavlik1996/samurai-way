import {
    newMessageBodyAC,
    sendMessageAC,
} from "../../redux/store";
import React from "react";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


// type DialogsContainerPropsType = {
//     store: StoreType
// }

export const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const dialogsPage = store.getState().dialogsPage

                    const sendMessage = () => {
                        store.dispatch(sendMessageAC())
                    }

                    const onChangeHandler = (body: string) => {
                        store.dispatch(newMessageBodyAC(body))
                    }

                    return <Dialogs dialogsPage={dialogsPage} newMessageBodyAC={onChangeHandler}
                                    sendMessage={sendMessage}/>
                }
            }
        </StoreContext.Consumer>
    )

}