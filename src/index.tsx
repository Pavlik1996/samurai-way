import React from 'react';
import './index.css';
import './index.css';
import {rerenderEntireTree} from "./render";
import {store} from "./redux/redux-store";

store.subscribe(rerenderEntireTree)
rerenderEntireTree()