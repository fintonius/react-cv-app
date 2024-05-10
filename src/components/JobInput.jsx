import { useState } from 'react';

export default function JobInput(props) {

    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        const jobData = {
            companyName: companyName,
            jobTitle: jobTitle,
            date: date,
            description: description,
            category: 'profile',
        };
        props.addData(jobData);
    };
    return (
        <div>
            <h2>Experience</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="company-name">
                    Company Name
                </label>
                <input 
                    type="text" 
                    id="company-name" 
                    name="company-name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Company Name"
                />
                <label htmlFor="job-title">
                Job Title
                </label>
                <input 
                    type="text" 
                    id="job-title" 
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    autoComplete="off" 
                    placeholder='Job Title'
                />
                <label htmlFor="date">
                    Date: 
                </label>
                <input 
                    type="date" 
                    id="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Date"
                    autoComplete="off" />
                <label htmlFor="description">
                    Description
                </label>
                <input 
                    type="text" 
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="description" 
                    autoComplete="off" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}