import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData, logOut } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";

type mapStateToDispatch = {
  getAuthUserData: () => void;
  logOut: () => void;
};

type mapStateToPropsType = {
  data: {
    id: number | null;
    login: string | null;
    email: string | null;
  };
  isAuth: boolean;
};

type PropsType = mapStateToDispatch & mapStateToPropsType;

class HeaderContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    data: state.auth.data,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { getAuthUserData, logOut })(
  HeaderContainer
);
