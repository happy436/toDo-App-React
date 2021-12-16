import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components/App';
import store from "./redux/redux-store"

let reRender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


reRender(store.getState())

store.subscribe(() => {
    let state = store.getState()
    reRender(state);
})
