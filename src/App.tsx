import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import {Music} from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";
import {UserComponent} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {DialogsComponent} from "./components/Dialogs/DialogsContainer";
import {ProfileComponent} from "./components/Profile/ProfileContainer";

export const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className={"app-wrapper-content"}>
                    <Route path="/profile/:userId?" render={() => <ProfileComponent/>}/>
                    <Route path="/dialogs" render={() => <DialogsComponent/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route
                        path="/settings"
                        render={() => <Settings/>}
                    />
                    <Route path="/users" render={() => <UserComponent/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};
