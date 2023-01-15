import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Music} from "./components/Music/Music"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/state";


// type AppPropsType = {
//     state: RootStateType
//     addPost: () => void
//     updateNewPostText: (newText: string) => void
// }


type PropsType = {
    store: StoreType
}
export const App: React.FC<PropsType> = (props) => {

    const state = props.store.getState()


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path="/profile" element={<Profile
                            profilePage={props.store._state.profilePage}
                            addPost={props.store.addPost.bind(props.store)}
                            updateNewPostText={props.store.changeNewText.bind(props.store)}/>
                        }/>
                        <Route path="/dialogs*" element={<Dialogs state={props.store._state.dialogsPage}/>}/>
                        <Route path="/news" element={<News title={"News"}/>}/>
                        <Route path="/music" element={<Music title={"Music"}/>}/>
                        <Route path="/settings" element={<Settings title={"Settings"}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

