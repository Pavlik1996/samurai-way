import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Music} from "./components/Music/Music"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/store";
import {DialogsContainer, SuperDialogsContainer} from "./components/Dialogs/DialogsContainer";

export type PropsType = {
    store: StoreType
}
export const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs" element={<SuperDialogsContainer/>}/>
                        <Route path="/news" element={<News title={"News"}/>}/>
                        <Route path="/music" element={<Music title={"Music"}/>}/>
                        <Route path="/settings" element={<Settings title={"Settings"}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

