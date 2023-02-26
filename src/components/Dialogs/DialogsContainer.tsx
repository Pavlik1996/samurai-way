import React, { FC } from "react";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { ActionsTypeDialogs, sendMessageAC } from "../../redux/dialogs-reducer";
import witchAuthRedirect from "../../hoc/witchAuthRedirect";
import { compose } from "redux";
import { MessagesPageType } from "../../redux/store";

type mapStateToPropsType = {
  dialogsPage: MessagesPageType;
};

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch: (action: ActionsTypeDialogs) => void) => {
  return {
    sendMessage: (newMessageBody: string) => {
      dispatch(sendMessageAC(newMessageBody));
    },
  };
};

export const DialogsComponent = compose<FC>(
  connect(mapStateToProps, mapDispatchToProps),
  witchAuthRedirect
)(Dialogs);
