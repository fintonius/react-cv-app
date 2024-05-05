// this could end up being refactored as a single form component and used
// for each input section which when added to the App file is sent a bunch 
// of info as props that is then .map() into JSX?

import { useState } from "react";

export default function ProfileInput(props) {
    function handleSubmit(e) {
        e.preventDefault();
        props.addRecord('more hell scape');
      }

    function handleInput(e) {
        console.log(e.target.value)
    } 
    
    const [formData, setFormData] = useState({
        firstName: '',
        surName: '',
        email: '',
    });
    
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
                    autoComplete="off"
                    value={formData.firstName}
                    onChange={handleInput}
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