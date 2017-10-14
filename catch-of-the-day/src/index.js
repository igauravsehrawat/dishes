// let's go!
// bring up the Hello in a component name
import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';

console.log(StorePicker);

render(<StorePicker/>, document.querySelector('#main'));
