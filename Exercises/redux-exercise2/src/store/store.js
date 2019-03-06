import {createStore} from 'redux';
import {ADD_PERSON_ACTION, REMOVE_PERSON_ACTION} from './../consts/actionConsts'

let initialState = [{name:"bob"}];


var officeApp = (state = initialState, action)=>{
    if(action.type === ADD_PERSON_ACTION)
    {
        let clonedArray = state.slice(0);
        clonedArray.push({name: action.name, age: action.age});
        return clonedArray;

    }
    if(action.type === REMOVE_PERSON_ACTION)
    {
        return state.filter(person => person.name !== action.name);
    }
    return state;
}

export default createStore(officeApp);
