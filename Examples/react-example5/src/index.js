import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SayHello extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {name:""}
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(event){
        this.setState({name:event.target.value})
    }
    render () {
        return <div>
                <h1>Hello {this.state.name} you are using a component class</h1>
                <input type="text" value={this.state.name} onChange={this.handleTextChange}/>
            </div>
    }
}

ReactDOM.render(<SayHello/>, document.getElementById('root'));
