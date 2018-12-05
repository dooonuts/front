import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Switch, Router } from 'react-router-dom';
import App from './components/App';
import 'font-awesome/css/font-awesome.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
