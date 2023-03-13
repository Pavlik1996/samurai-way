import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { login, logOut } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import s from "../common/FormsControls/FormsControls.module.css";

export type FormDataType = {
  email: string;
  password: string;
  rememberme: boolean;
};

type LoginType = {
  login: (email: string, password: string, rememberMe: boolean) => void;
  logOut: () => void;
  isAuth: boolean;
};

type mapStateToPropsType = {
  isAuth: boolean;
};

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder={"email"} name={"email"} component={Input} validate={[required]}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} type={"password"}/>
      </div>
      <div>
        <Field component={Input} name={"rememberme"} type={"checkbox"}/>
        <span>remember me</span>
      </div>
      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<FormDataType>({
  form: "login", // уникальное строкове имя
})(LoginForm);

export const Login = (props: LoginType) => {
  const onSubmit = (fromData: FormDataType) => {
    props.login(fromData.email, fromData.password, fromData.rememberme);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logOut })(Login);
