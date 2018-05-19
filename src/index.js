import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { Provider} from 'react-redux';
import * as store from './store';
import { BrowserRouter as Router} from 'react-router-dom';

const setStore = store.default({})

ReactDOM.render(
    <Provider store={setStore}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
