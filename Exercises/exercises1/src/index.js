import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let MyUnorderedList = ()=> {
    return React.createElement("ul",null,
        [React.createElement("li",null, 'item 1'),
        React.createElement("li",null, 'item 2')]
    )
};

ReactDOM.render(<MyUnorderedList/>, document.getElementById('root'));
