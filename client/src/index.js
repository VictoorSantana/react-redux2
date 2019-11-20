import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';

import { Provider } from 'react-redux';
import productsReducer from './reducers/productsReducer';
import userReducer from './reducers/userReducer';

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});

const store = createStore(allReducers, {
    products: [{ name: 'iphone' }],
    user: 'michael'
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,         
    document.getElementById('root'));

    serviceWorker.unregister();
