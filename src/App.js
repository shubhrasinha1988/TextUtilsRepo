import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode]=useState('light');
 const toggleTheme=()=>{
if (mode==='dark' || mode==="green"){
setMode('light');
document.body.style.backgroundColor='white';

showAlert("light mode enabled","success");
}else if (mode==='light' ){
  setMode('dark');
 document.body.style.backgroundColor='grey';

  showAlert("dark mode enabled","warning");

}
}

const greenMode=()=>{
  
   document.body.style.backgroundColor='green';
   showAlert("green mode enabled","warning");
  
}

const yellowMode=()=>{
  document.body.style.backgroundColor='yellow';
  showAlert("yellow mode enabled","danger");
}
  
const [alertMsg,setAlert]=useState(null);

const showAlert=(msg,type)=>{

 const shwMsg ={ 
  message:msg,
  type:type 
}
setAlert(shwMsg);
setTimeout(() => {
  setAlert(null);
}, 1500);


}

  return (

   <>
   <BrowserRouter>

   <Navbar title="TextUtils" aboutText='About' mode={mode} toggleTheme={toggleTheme} greenMode={greenMode} yellowMode={yellowMode}/>
   <Alert alertMsg={alertMsg}/>

   <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
   </BrowserRouter>

   
   
  
   </>
  );
}

export default App;