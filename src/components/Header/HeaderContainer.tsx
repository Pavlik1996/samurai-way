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
  setAuthUserData: (id: number, login: string, email: string) => void;
  isAuth: boolean;
  // setIsFetching: () => void
};

class HeaderContainer extends React.Component<HeaderContainerType> {
  componentDidMount() {
    // this.props.setIsFetching(true)
    axios
      .get<initialStateAuthType>(
        `https://social-network.samuraijs.com/api/1.0/auth/me`,
        {
          withCredentials: true,
        }
      )
      .then((r) => {
        if (r.data.resultCode === 0) {
          let { id, login, email } = r.data.data;
          this.props.setAuthUserData(id, login, email);
        }
      });
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