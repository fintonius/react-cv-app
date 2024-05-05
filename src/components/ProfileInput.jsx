// this could end up being refactored as a single form component and used
// for each input section which when added to the App file is sent a bunch 
// of info as props that is then .map() into JSX?

import { useState } from "react";

export default function ProfileInput({submitFormData, onInputChange, handleSubmit }) {

    // THIS AND THE OTHER INPUTS ARE GOING TO REQUIRE AN ARRAY||OBJECT TO 
    // STORE THE USER INPUT IN, NOT JUST A STRING. WILL THEN NEED A WAY
    // TO PASS ALL THE INFO TO THE RELEVANT PLACE USING handleSubmit()???
    // const [name, setName] = useState('');

    // function handleSubmit(e){
    //     e.preventDefault();
    //     if(name === '') alert('enter text');
    //     props.onSubmit(name);
    //     setName('');
    // }

    // function handleChange(e) {
    //     setName(e.target.value);
    // }

    return (
        
        <div>
            <h2>Profile</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first-name">
                    First Name
                </label>
                <input 
                    type="text" 
                    id="first-name" 
                    value={submitFormData.name} 
                    onChange={(e) => onInputChange(e.target.name, e.target.value)} 
                    autoComplete="off" 
                />
                <label htmlFor="second-name">
                   Second Name
                </label>
                <input type="text" id="second-name" autoComplete="off" />
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" id="email" autoComplete="off" />
                <label htmlFor="phone-number">
                    Phone Number
                </label>
                <input type="number" id="phone-number" autoComplete="off" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}