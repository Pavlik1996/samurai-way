import ReactDOM from "react-dom";
import {store} from "./redux/redux-store";
import {App} from "./App";
import {Provider} from "react-redux";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,

        document.getElementById('root')
    );
}

