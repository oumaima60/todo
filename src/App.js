import React from 'react';
{/*import Formtask from './components/ToDo/Formtask';
import style from './components/ToDo/style.css';*/}
import { Routes,Route } from 'react-router-dom';
import Home from './multiPage/Router/Home';
import Profile from './multiPage/Router/Profile';

function App() {
  return (
    <div className="App">
          {  /*  <Formtask/>} */  }
          <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/Profile' element={<Profile/>} />
          </Routes>

 </div>                  
  );
}


export default App;
