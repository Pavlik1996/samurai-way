import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";

type HeaderContainerType = {
  data: {
    id: number;
    login: string;
    email: string;
  };
  getAuthUserData: () => void;
  isAuth: boolean;
};

class HeaderContainer extends React.Component<HeaderContainerType> {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    data: state.auth.data,
    resultCode: state.auth.resultCode,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
