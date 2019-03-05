import {ADD_PERSON_ACTION, REMOVE_PERSON_ACTION} from './../consts/actionConsts'

export const addPerson = (name, age) =>{
    return {type: ADD_PERSON_ACTION, name, age};
}

export const removePerson = (name) => {
    return {type: REMOVE_PERSON_ACTION, name};
}