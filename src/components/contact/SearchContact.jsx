import { PURPLE,COMMENT } from "../../helpers/Colores.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons' 
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const SearchContact = () => {
  
  const [state,setState]=useState({txt:""})
  const setContactSearch = (event) => {
    setState({
      ...state,
      txt:event.target.value
      
    });
  
  };
  const {txt}=state
  return (
    <div className="input-group mx-2 w-75" dir="ltr">
   
                        <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: PURPLE,cursor:"pointer" }}
      >
           <Link
                        to={`/SearchContactResult/${txt}`}
                      >
        <FontAwesomeIcon icon={faSearch} className="fas fa-search" />

                      </Link>
      </span>
                     
     
      <input
        dir="rtl"
        type="text"
        onChange={setContactSearch}
        className="form-control"
        placeholder="جستجوی مخاطب"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default SearchContact;
