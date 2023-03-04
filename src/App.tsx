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
import { AppStateType } from "./redux/redux-store";
import { Preloader } from "./components/common/Preloader/Preloader";

type PropsType = {
  initializeApp: () => void
  initialize: boolean
}

class App extends React.Component<PropsType>{
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    return !this.props.initialize
      ? <Preloader />
      : <div className="app-wrapper">
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
  }
};

const mapStateToprop = (state: AppStateType) => ({
  initialize: state.app.initialized
})


export const AppComponent = compose<FC>(connect(mapStateToprop, { initializeApp }), withRouter)(App)