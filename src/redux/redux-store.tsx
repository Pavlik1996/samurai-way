import { applyMiddleware, combineReducers, createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { usersReducer } from "./users-reducer";
import { AuthReducer } from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  // sidebar: sidebarReducer
  auth: AuthReducer,
  form: formReducer,
});

export type AppStateType = ReturnType<typeof reducers>;

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;
