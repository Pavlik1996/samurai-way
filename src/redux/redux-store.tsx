import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
    // sidebar: sidebarReducer
})


export type AppStateType = ReturnType<typeof reducers>


export let store = createStore(reducers)

//@ts-ignore
window.store = store