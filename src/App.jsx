import './App.css'
import ProfileInput from './components/ProfileInput'
import JobInput from './components/JobInput'
import EducationInput from './components/EducationInput'

export default function App() {
  return (
    <>
      <main>
        <div className='input'>
          <div><ProfileInput /></div>
          <div><JobInput /></div>
          <div><EducationInput /></div>
        </div>
        <div className='cv'>
          Hell world
        </div>
      </main>
    </>
  )
}