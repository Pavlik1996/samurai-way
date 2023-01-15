import ReactDOM from "react-dom";
import {store} from "./redux/state";
import {App} from "./App";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}