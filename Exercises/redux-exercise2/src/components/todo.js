import React from 'react';
import { connect } from 'react-redux'
import {addPerson} from './../actions/personActions'

let mapStateToProps =(state)=>{
    return {todos: state};
}

let mapDispatchToProps = {addPerson}

class ToDo extends React.Component
{
    render() {
        return <div>
                <ul>
                    { this.props.todos.map( todo=> { return <li>{todo.name}</li> })}
                </ul>
                <button onClick={()=>this.props.addPerson("frank", 23)}>Add a new person</button>
              </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);