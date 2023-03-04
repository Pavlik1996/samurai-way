import React, { ComponentType } from "react";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../redux/redux-store";
import { connect } from "react-redux";

type RedirectComponentType = {
  isAuth: boolean;
};

let mapSTateToPropsForRedirect = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

function WitchAuthRedirect(Component: ComponentType<any>) {
  function RedirectComponent(props: RedirectComponentType) {
    const { isAuth, ...restProps } = props;
    if (!props.isAuth) return <Redirect to={"/login"} />;
    return <Component {...restProps} />;
  }

  return connect(mapSTateToPropsForRedirect)(RedirectComponent);
}

export default WitchAuthRedirect;

