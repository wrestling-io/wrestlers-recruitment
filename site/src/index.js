import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentBox from './tutorial/CommentBox';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CommentBox />, document.getElementById('root'));

registerServiceWorker();
