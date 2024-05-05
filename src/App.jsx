import './App.css';
import ProfileInput from './components/ProfileInput';
import JobInput from './components/JobInput';
import EducationInput from './components/EducationInput';
import { useEffect, useState } from 'react';
import DisplayInfo from './components/DisplayInfo';
import axios from 'axios';

export default function App(props) {

  console.log('this is DATA: ', props.cv)

  const [formData, setFormData] = useState({
    firstName: '',
    surName: '',
    email: '',
  });

  const handleInputChange =  (name, value) => {
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('This is the form data: ', formData)
  };

  function addInfo(info) {
      console.log(info);
  }

  return (
    <>
      <main>
        <div className='input'>
          <div>
            <ProfileInput
              handleSubmit={handleSubmit}
              submitFormData={formData}
              onInputChange={handleInputChange}
          /></div>
          <div><JobInput /></div>
          <div><EducationInput /></div>
        </div>
        <div className='cv'>
          Hell world
          {/* 
          The data from the DB is put here by using a function
          to map the info from the DB into the correct HTML element
          structure.  
          
          ---OR---
          
          do I create a HTML framework here and pass the relevant 
          info from the DB to the correct element using functions
          or some other method?!
          
          seems like it might be better to go with the latter option
          as it allows for more control over each element without 
          having to rewrite one, probably large and convoluted, function
          ???

          CREATE A SEPARATE LIST OF DATA FOR EACH SECTION:
            - the list is generated by using if(listName === skillsList) {
                >filtered code goes here<
              } for each list
            - when the user clicks the submit btn it will invoke the relevant
              function
            - 'personalInfoList', 'workExperienceList', 'skillsList' etc.
            - pass these as jsx in the code: 
              - <section className='personal-info'>{personalInfoList}</section>
          */}
          <h1>CV</h1>
          <section className='personal-info'>
            Personal Info
            <DisplayInfo formData={formData} />
          </section>
          <section className='work-experience'>Work Experience</section>
          <section className='education'>Education</section>
          <section className='skills'>Skills</section>

        </div>
      </main>
    </>
  )
}

// CODE FOR USING JSON DATABASE

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('cvData.json');
  //     const data = response.data;
  //     console.log('this is data: ', data);
  //     setFormData(data);
  //   } catch (error) {
  //     console.log('Error fetching data: ', error);
  //   }
  // }
  // 