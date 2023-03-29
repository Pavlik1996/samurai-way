import React from 'react';
import ReactDOM from "react-dom";
import {SamuraiJSApp} from "./App";
import {store} from "./redux/redux-store";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        < SamuraiJSApp/>,
        document.getElementById('root')
    );

}
store.subscribe(rerenderEntireTree)
rerenderEntireTree();