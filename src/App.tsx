import React, {FC, lazy} from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HeaderContainer from "./components/Header/HeaderContainer"
import {BrowserRouter, HashRouter, Route, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType, store} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

const DialogsComponent = lazy(() => import('./components/Dialogs/DialogsContainer')
    .then(module => ({default: module.DialogsComponent})))

const ProfileComponent = lazy(() => import("./components/Profile/ProfileContainer")
    .then(module => ({default: module.ProfileComponent})))

const Settings = lazy(() => import("./components/Settings/Settings")
    .then(module => ({default: module.Settings})))

const News = lazy(() => import("./components/News/News")
    .then(module => ({default: module.News})))

const Music = lazy(() => import("./components/Music/Music")
    .then(module => ({default: module.Music})))

const Logintwo = lazy(() => import("./components/Login/Login")
    .then(module => ({default: module.Logintwo})))

const UserComponent = lazy(() => import("./components/Users/UsersContainer")
    .then(module => ({default: module.UserComponent})))



type PropsType = {
    initializeApp: () => void
    initialize: boolean
}

class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className={"app-wrapper-content"}>
                    <React.Suspense fallback={<Preloader/>}>
                        <Route path="/profile/:userId?" render={() => <ProfileComponent/>}/>
                        <Route path="/dialogs" render={() => <DialogsComponent/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/users" render={() => <UserComponent/>}/>
                        <Route path="/login" render={() => <Logintwo/>}/>
                    </React.Suspense>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state: AppStateType) => ({
    initialize: state.app.initialized
})


export const AppComponent = compose<FC>(connect(mapStateToProps, {initializeApp}), withRouter)(App)


export const SamuraiJSApp = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <AppComponent/>
            </HashRouter>
        </Provider>
    )
}