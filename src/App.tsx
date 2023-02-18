import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { Music } from "./components/Music/Music";
import { BrowserRouter, Route } from "react-router-dom";
import { Settings } from "./components/Settings/Settings";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { News } from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className={"app-wrapper-content"}>
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music title={"Music"} />} />
          <Route
            path="/settings"
            render={() => <Settings title={"Settings"} />}
          />
          <Route path="/users" render={() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
};
