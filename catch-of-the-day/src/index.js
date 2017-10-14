// let's go!
// bring up the Hello in a component name
import React from 'react';
import { render } from 'react-dom';

import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';

render(<App/>, document.querySelector('#main'));
