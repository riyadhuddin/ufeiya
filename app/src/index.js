import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Drizzle, generateStore } from 'drizzle';
import { DrizzleContext } from 'drizzle-react';
import SimpleStorage from './contracts/SimpleStorage.json';

const options = { contarats: [SimpleStorage] };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

ReactDOM.render(
    <DrizzleContext.Provider drizzle={drizzle}><App />
    </DrizzleContext.Provider>,
    document.getElementById('root'));
