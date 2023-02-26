import React from "react";
import { FormDataType, Login } from "./Login";

export class LoginContainer extends React.Component<any> {
  onSubmit = (fromData: FormDataType) => {};

  render() {
    return <Login onSubmit={this.onSubmit} />;
  }
}
