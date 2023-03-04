import React, { FC } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { Music } from "./components/Music/Music";
import { Route, withRouter } from "react-router-dom";
import { Settings } from "./components/Settings/Settings";
import { News } from "./components/News/News";
import { UserComponent } from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { DialogsComponent } from "./components/Dialogs/DialogsContainer";
import { ProfileComponent } from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";

type PropsType = {
  initializeApp: () => void
}

class App extends React.Component<PropsType>{
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className={"app-wrapper-content"}>
          <Route path="/profile/:userId?" render={() => <ProfileComponent />} />
          <Route path="/dialogs" render={() => <DialogsComponent />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/users" render={() => <UserComponent />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
};

// export default compose(
//   (connect(null, { getAuthUserData }), withRouter)(App))


export const AppComponent =  compose<FC>(connect(null, {initializeApp }), withRouter)(App)