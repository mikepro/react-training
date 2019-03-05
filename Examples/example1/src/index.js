import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let MyComponet = ()=> {
    return React.createElement("h1",null,"Hello from react")
};

ReactDOM.render(<MyComponet/>, document.getElementById('root'));
