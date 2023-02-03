import React from 'react';
import ReactDOM from 'react-dom';

import { makeServer } from './api/mirage/server';
import { App } from './App';

makeServer();

ReactDOM.render(<App />, document.getElementById('root'));
