import React, {useState} from 'react';

const Form = () => {

    const [name, setName] = useState('');
    const [ handle, sethandle] = useState('');

    const register = e => {
        e.preventDefault();
        console.log({ name, handle });
    }



return (
    <form
    onSubmit={register}>
        <label>name:</label>
        <input
        value={name}
        onChange={e => setName(e.target.value)}
        type='text'
        >
        </input>

        <label>handle:</label>
        <input
        value={handle}
        onChange={e => sethandle(e.target.value)}
        type='text'
        >
        </input>

        <button
        >Register</button>
    </form>
)


}

export default Form;