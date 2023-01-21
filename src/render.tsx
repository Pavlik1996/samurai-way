import ReactDOM from "react-dom";
import {store} from "./redux/redux-store";
import {App} from "./App";
import {Provider} from "./StoreContext";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App store={store}/>
        </Provider>,

        document.getElementById('root')
    );
}