import {CURRENTLINE, CYAN, ORANGE, PURPLE, RED ,PINK, COMMENT} from '../../helpers/Colores.js'
import { useParams,Link ,useNavigate} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {getContactSearch} from '../../services/contactServices.js'
import Spinner from '../Spinner.jsx'
const SearchContact=()=>{
    const { txt } = useParams();
    const [state, setState] = useState({
        loading: false,
        contacts: [],
        
      });
      const navigate = useNavigate();
      useEffect(() => {
    
        const fetchData = async () => {
          try {
            setState({ ...state, loading: true });
            const { data: contactData } = await getContactSearch(txt);
    
            setState({
              ...state,
              loading: false,
              contacts: contactData,
              
            });
          } catch (err) {
            console.log(err.message);
            setState({ ...state, loading: false });
          }
        };
    
        fetchData();
      },  [txt]);
      const { loading, contacts } = state;
    return(
        <div className='row' style={{direction:"rtl",margin:"20px"}}>
           {
            
              contacts.map(x=>(
                
                <div className="card" style={{width:"18rem",marginLeft:"1%"}}>
                <img
                     src={require(`../../assets/1.png`)}
                     alt=""
                     style={{ border: `1px solid ${PURPLE}`,margin:"5px" }}
                     className="img-fluid rounded"
                   />
                 <div className="card-body">
                   <h5 className="card-title">{x.name} {x.family}</h5>
                   <Link className="btn "   style={{ backgroundColor: PURPLE }} to={`/contactinfo/${x.id}`}  >
                    مشاهده اطلاعات
              </Link>
                 </div>
             </div>
               ))
              }
              </div>
               
  
    )
}
export default SearchContact;