import './App.css'
import InformationInput from './components/InformationInput'
import SectionInput from './components/SectionInput'
import ProfileInput from './components/ProfileInput'
import JobInput from './components/JobInput'
import EducationInput from './components/EducationInput'
export default function App() {
  return (
    <>
        <InformationInput />

      <div className='cv'>
        Hell world
      </div>
      <div><ProfileInput />Profile</div>
      <div><JobInput />Experience</div>
      <div><EducationInput />Education</div>
    </>
  )
}