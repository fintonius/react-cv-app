
import { useState } from "react";

export default function ProfileInput(props) {

      const [name, setName] = useState('');
      const [surName, setSurName] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
    
      const onSubmit = (e) => {
        e.preventDefault();
        const profileData = {
          name: name,
          surName: surName,
          email: email,
          phone: phone,
          category: 'profile',
        };
        props.addInfo(profileData);
      };
    
    return (        
        <div>
            <h2>Profile</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="first-name">
                    First Name
                </label>
                <input 
                    type="text" 
                    id="first-name" 
                    name="first-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />
                <label htmlFor="second-name">
                   Second Name
                </label>
                <input 
                    type="text" 
                    id="second-name" 
                    value={surName}
                    onChange={(e) => setSurName(e.target.value)}
                    autoComplete="off" />
                <label htmlFor="email">
                    Email
                </label>
                <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    autoComplete="off" />
                <label htmlFor="phone-number">
                    Phone Number
                </label>
                <input 
                    type="number" 
                    id="phone-number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone" 
                    autoComplete="off" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}