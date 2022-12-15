import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Music} from "./components/Music/Music"
import {BrowserRouter,Routes,Route}  from "react-router-dom";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className={"app-wrapper-content"}>
                <Routes>
                    <Route path="/profile" element={<Profile title={"Profile"}/>}/>
                    <Route path="/dialogs" element={<Dialogs title={"Dialogs"}/>}/>
                    <Route path="/news" element={<News title={"News"}/>}/>
                    <Route path="/music" element={<Music title={"Music"}/>}/>
                    <Route path="/settings" element={<Settings title={"Settings"}/>}/>
                </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
