import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import {
  initialStateAuthType,
  setAuthUserData,
} from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";

type HeaderContainerType = {
  data: {
    id: number;
    login: string;
    email: string;
  };
  resultCode: number;
  setAuthUserData: () => void;
  isAuth: boolean;
};

class HeaderContainer extends React.Component<HeaderContainerType> {
  componentDidMount() {
    this.props.setAuthUserData();
  }

  render() {
    return <Header isAuth={this.props.isAuth} />;
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    data: state.auth.data,
    resultCode: state.auth.resultCode,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
