import './App.css';
import Navbare from './components/Navbar'
import React from 'react'
import Contacts from './components/contact/Contacts'
import {Route,Routes,useNavigate,Navigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUser } from '@fortawesome/free-solid-svg-icons'
import About from './components/About';
import ContactInfo from './components/contact/ContactInfo.jsx';
import AddContact from './components/contact/AddContact.jsx';
import ContactEdit from './components/contact/ContactEdit.jsx';
import SearchContactResult from './components/contact/SearchContactResult'
import { useState, useEffect } from "react";
import {MContext} from '../src/components/context/contactContext'
import {menue} from '../src/services/menu'
const App=()=> {
  const [loading, setLoading] = useState(false);
  const [getmenue, setmenue] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setmenue(menue)
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    
      <MContext.Provider value={{
        menue:getmenue
      }}>
        <div className="App">
          {/* with props */}
          {/* <Navbare menuelist={getmenue}/> */}
          <Navbare />
          <Routes>
          <Route path='/SearchContactResult' element={<Navigate to={"/contacts"}/>}/>
            <Route path='/' element={<Navigate to={"/contacts"}/>}/>
            <Route path='/contacts' element={ <Contacts/>}/> 
            <Route path='/about' element={ <About/>}/>  
            <Route path='/AddContact'  element={ <AddContact loading={loading}/>}/>  
            <Route path='/EditContact/:id' element={ <ContactEdit/>}/>    
            <Route  path='/SearchContactResult/:txt' element={ <SearchContactResult/>}/>
            <Route path='/contactinfo/:id' element={ <ContactInfo/>}/>    
          </Routes>
         
          </div>
      
    </MContext.Provider>
     

  );
}

export default App;
