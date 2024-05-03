import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//test data to make sure functions running correctly
const DATA = [
  { id: "todo-0", listName: "personalInfoList", name: "Eat", completed: true },
  { id: "todo-1", listName: "skillsList", name: "Sleep", completed: false },
  { id: "todo-2", listName: "educationList", name: "Repeat", completed: false },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* passing DATA as prop to App, it's accessible as props.cv*/}
    <App cv={DATA} />
  </React.StrictMode>,
)
