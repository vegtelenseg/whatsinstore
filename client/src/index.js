import React from 'react';
import ReactDOM from 'react-dom';
import './generated-sources/index.css';
import App from './components/App';
import registerServiceWorker from './service-workers/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
