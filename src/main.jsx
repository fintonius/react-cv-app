import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//test data to make sure functions running correctly

const DATA = [
  {
      id: 1,
      category: "experience",
      subObjects: [
          { placeName: 'Tate',  id: 1, dates: '2019 - present', description: 'some text here for the moment'},
          { placeName: 'NGS', id: 2, dates: '2015 - 2019', description: 'some text here for the moment'},
          { placeName: 'Cheeverstown', id: 3, dates: '2009 - 2011', description: 'some text here for the moment'}
      ]
  },
  {
      id: 2,
      category: "profile",
      subObjects: [
          { placeName: 1, subName: "SubObject 2.1" },
          { placeName: 2, subName: "SubObject 2.2" },
          { placeName: 3, subName: "SubObject 2.3" }
      ]
  },
  {
      id: 3,
      category: "education",
      subObjects: [
          { placeName: 1, subName: "SubObject 3.1" },
          { placeName: 2, subName: "SubObject 3.2" },
          { placeName: 3, subName: "SubObject 3.3" }
      ]
  }
];

function addData(data) {
  const newEntry = DATA.map((entry) => {
    if(data.category === entry.category) {
      console.log('testy test', entry.subObjects);
      entry.subObjects.push(data);
      console.log('post push', entry.subObjects);
      return;
    };
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* passing DATA as prop to App, it's accessible as props.cv*/}
    <App cv={DATA} addData={addData}/>
  </React.StrictMode>,
)
