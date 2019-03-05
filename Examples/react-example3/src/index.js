import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyComponet extends React.Component
{
    render () {
        return <h1>Hello from my component using a class</h1>
    }
}

ReactDOM.render(<MyComponet/>, document.getElementById('root'));
