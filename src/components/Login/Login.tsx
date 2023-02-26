import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

export type FormDataType = {
  login: string;
  password: string;
  rememberme: boolean;
};

type LoginType = {
  onSubmit: (fromData: FormDataType) => void;
};

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"login"} name={"login"} component={"input"} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={"input"} />
      </div>
      <div>
        <Field component={"input"} name={"rememberme"} type={"checkbox"} />
        <span>remember me</span>
      </div>
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
    props.onSubmit(fromData);
  };
  return (
    <div>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
