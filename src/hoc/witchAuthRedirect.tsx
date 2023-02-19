import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type ClassType = {
    isAuth: boolean
}

let mapSTateToPropsForRedirect = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

const WitchAuthRedirect = (Component: ComponentType<any>) => {

    class RedirectComponent extends React.Component<ClassType> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapSTateToPropsForRedirect)(RedirectComponent)
};

export default WitchAuthRedirect;














