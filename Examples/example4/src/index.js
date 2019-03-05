import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SayHello extends React.Component
{
    render () {
        return <h1>Hello {this.props.name}from my component using a class</h1>
    }
}

ReactDOM.render(<SayHello name="Michael"/>, document.getElementById('root'));
