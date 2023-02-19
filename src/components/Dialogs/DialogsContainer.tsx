import React from "react";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import {
  ActionsTypeDialogs,
  newMessageBodyAC,
  sendMessageAC,
} from "../../redux/dialogs-reducer";
import witchAuthRedirect from "../../hoc/witchAuthRedirect";

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let AuthRedirectComponent = witchAuthRedirect(Dialogs);

let mapDispatchToProps = (dispatch: (action: ActionsTypeDialogs) => void) => {
  return {
    newMessageBodyAC: (body: string) => {
      dispatch(newMessageBodyAC(body));
    },
    sendMessage: () => {
      dispatch(sendMessageAC());
    },
  };
};

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);
