import {
    ActionsType,
    MessagesPageType,
    newMessageBodyAC, RootStateType,
    sendMessageAC,
} from "../../redux/store";
import React from "react";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


// type DialogsContainerPropsType = {
//     store: StoreType
// }

export const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const sendMessage = () => {
                        store.dispatch(sendMessageAC())
                    }

                    const onChangeHandler = (body: string) => {
                        store.dispatch(newMessageBodyAC(body))
                    }

                    return <Dialogs dialogsPage={store.getState().dialogsPage}
                                    newMessageBodyAC={onChangeHandler}
                                    sendMessage={sendMessage}/>
                }
            }
        </StoreContext.Consumer>
    )

}

type mapStateToPropsType = {
    dialogsPage: MessagesPageType
}

type mapDispatchToPropsType = {
    dispatch: (action: ActionsType) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        newMessageBodyAC: (body: string) => {
            dispatch(newMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}


export const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);