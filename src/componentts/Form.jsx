import React from 'react';
import useForm from '../utils/useForm'

const Form = () => {

    //Set object to use useForm function
    const [values, handleChange] = useForm();

    const register = e => {
        e.preventDefault();
        console.log(values);
    }



    return (
        <form onSubmit={register}>
            <label>name:</label>
            <input

                //Tie Value to values object || Set Default state
                value={values.name || ''}
                name="name"
                //Reference handleChange function
                onChange={handleChange}
                type='text'
            >
            </input>

            <label>handle:</label>
            <input
                value={values.handle || ''}
                name="handle"
                onChange={handleChange}
                type='text'
            >
            </input>

            <button
            >Register</button>
        </form>
    )


}

export default Form;