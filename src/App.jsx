import './App.css';
import ProfileInput from './components/ProfileInput';
import JobInput from './components/JobInput';
import EducationInput from './components/EducationInput';
import { useEffect, useState } from 'react';
import DisplayInfo from './components/DisplayInfo';
import JobEntry from './components/JobEntry';

export default function App(props) {

  const [profileData, setProfileData] = useState({
    category: '',
    name: '',
    surName: '',
    email: '',
    phone: '',
    date: '',
    description: '',
  });

  function addInfo(profile) {
    setProfileData(prevData => ({ ...prevData, ...profile }));
  }

  // SO, COPY THE ABOVE APPROACH FOR CAPTURING USER INPUT
  // FOR THE JOBS, EDUCATION, ETC. SECTIONS, USE profileData
  // TO CONTAIN THE DATA THEN PASS IT BACK TO THE "DB" IN MAIN
  // WITH THE BELOW FUNCTION

  function addData(data) {
    props.addData(data);
  }

const test = 'testing';

  return (
    <>
      <main>
        <div className='input'>
          <div>
            <ProfileInput addInfo={addInfo} />
          </div>
          <div>
            <JobInput addData={addData}/>
          </div>
          <div>
            <EducationInput />
          </div>
        </div>
        <div className='cv'>

          Hell world
          <h1>CV</h1>
          <section className='personal-info'>
            Personal Info
            <button onClick={addData}>Clcik</button>
            <div>Name: {profileData.name} {profileData.surName}</div>
            <div>Email: {profileData.email}</div>
            <div>Phone: {profileData.phone}</div>
          </section>
          <section className='work-experience'>
            <h2>Work Experience</h2>
            <JobEntry data={props.cv} />
          </section>
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