import ReactDOM from "react-dom";
import { store } from "./redux/redux-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppComponent } from "./App";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <AppComponent/>
            </BrowserRouter>
        </Provider>,

        document.getElementById('root')
    );
}

