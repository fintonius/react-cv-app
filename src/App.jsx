import './App.css'
import ProfileInput from './components/ProfileInput'
import JobInput from './components/JobInput'
import EducationInput from './components/EducationInput'

export default function App() {

  function addInfo(info) {
    console.log(info);
  }

  return (
    <>
      <main>
        <div className='input'>
          <div><ProfileInput onSubmit={addInfo} /></div>
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