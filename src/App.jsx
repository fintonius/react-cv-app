import './App.css';
import ProfileInput from './components/ProfileInput';
import JobInput from './components/JobInput';
import EducationInput from './components/EducationInput';
import { useEffect, useState } from 'react';
import JobEntry from './components/JobEntry';

export default function App(props) {

  const [cv, setCv] = useState(props.cv);

  function addData(data) {
    console.log('this is data: ', data)
    console.log('testy test', cv);
    const newEntry = cv.map((entry) => {
      if(data.category === entry.category) {        
        entry.subObjects.push(data);
        return;
      };
    })    
    setCv([...cv]);
    console.log('this is final cv: ', cv)
  }
  
  function editData(data) {
    console.log('this is editData');
  }
  
  function deleteData(data) {
    console.log('this is deleteData');
  }

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
            <div>Name: {profileData.name} {profileData.surName}</div>
            <div>Email: {profileData.email}</div>
            <div>Phone: {profileData.phone}</div>
          </section>
          <section className='work-experience'>
            <h2>Work Experience</h2>
            <JobEntry data={cv} />
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