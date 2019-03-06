import {createStore} from 'redux';
import {addPerson, removePerson } from './actions/personActions'
import {ADD_PERSON_ACTION, REMOVE_PERSON_ACTION} from './consts/actionConsts'

let initialState = [];


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

var store = createStore(officeApp);
store.subscribe(()=>console.log(store.getState()));

window.addNewPerson = () =>{
    store.dispatch(addPerson("bob", 22));
}
