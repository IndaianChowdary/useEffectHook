import { useState } from 'react';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';

function App() {

  let [unload, setUnload]=useState(true);
  return (
    <div className="App">

      <button onClick={()=>{
        if (unload==true) {
          setUnload(false);
          
        } else {
          setUnload(true);
        }
      }}>UNLOAD THE COMPONENET</button>
      <br></br>
   {unload==true?  <FunctionalComponent/>:null};
   {unload==true?  <ClassComponent/>:null};
    </div>
  );
}

export default App;
