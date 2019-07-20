import { useState } from 'react';
//Import useState


//Create useFrom Function that uses useState
const useForm = () => {

    const [state, setState] = useState({});

//Dynamically handling change on any input we pass it too
//Generated with event
//Call setState function that calls setState

    const handleChange = e => {
        //persist event that way we can refrence event at later time. Ex if async return response and we wanted to call
        e.persist();
        //Take previous state execute code
        //...state - create a new object spread out in new object
        // Create new index and value pair [e.target.name]: e.target.value
        setState(state => ({ ...state, [e.target.name]: e.target.value }))
    }


    //return state and handleChangeFunction which
    return [state, handleChange];

}

export default useForm;