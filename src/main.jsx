import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//test data to make sure functions running correctly

// WORK OUT HOW TO MAKE AN ARRAY OF OBJECTS CONTAINING EITHER 
// ARRAYS OR OBJECTS TO MIMIC A DATABASE FOR THE CV WITH DIFF
// ARRAYS/OBJECTS FOR EACH SECTION - JOB, EDUCATION, PROFILE, ETC.
const DATA = [
  {
      id: 1,
      name: "Experience",
      subObjects: [
          { placeName: 'Tate',  id: 1, dates: '2019 - present', description: 'some text here for the moment'},
          { placeName: 'NGS', id: 2, dates: '2015 - 2019', description: 'some text here for the moment'},
          { placeName: 'Cheeverstown', id: 3, dates: '2009 - 2011', description: 'some text here for the moment'}
      ]
  },
  {
      id: 2,
      name: "Profile",
      subObjects: [
          { placeName: 1, subName: "SubObject 2.1" },
          { placeName: 2, subName: "SubObject 2.2" },
          { placeName: 3, subName: "SubObject 2.3" }
      ]
  },
  {
      id: 3,
      name: "Education",
      subObjects: [
          { placeName: 1, subName: "SubObject 3.1" },
          { placeName: 2, subName: "SubObject 3.2" },
          { placeName: 3, subName: "SubObject 3.3" }
      ]
  }
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* passing DATA as prop to App, it's accessible as props.cv*/}
    <App cv={DATA} />
  </React.StrictMode>,
)
