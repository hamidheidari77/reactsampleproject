import {CURRENTLINE, CYAN, ORANGE, PURPLE, RED ,PINK} from '../../helpers/Colores.js'
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {getContact} from '../../services/contactServices.js'
import Spinner from '../Spinner.jsx'
const ContactInfo=()=> {
  const { id } = useParams();

  const [state, setState] = useState({
    loading: false,
    contact: {},
    
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ ...state, loading: true });
        const { data: contactData } = await getContact(id);

        setState({
          ...state,
          loading: false,
          contact: contactData,
          
        });
      } catch (err) {
        console.log(err.message);
        setState({ ...state, loading: false });
      }
    };

    fetchData();
  }, []);

  const { loading, contact } = state;
  
  return(
     
    <>
    {loading?(<Spinner/>):(
      <section className="container" style={{direction:"rtl"}}>
    <div className="row">
    <div className="col-md-2"></div>
          <div className="col-md-8">
          <div class="card text-center" style={{marginTop:"20px"}}>
          <div class="card-body">
         <div className="row">
         <div className="col-md-4">
          <img
                src={require(`../../assets/1.png`)}
                alt=""
                style={{ border: `1px solid ${PURPLE}` }}
                className="img-fluid rounded"
              />
          
          </div>
          <div className="col-md-8">
          <div class="mb-12">
  <label for="exampleInputEmail1" style={{float:"right",margin:"10px"}} class="form-label">نام</label>
  <input type="email" class="form-control" readOnly placeholder="نام" value={contact.name}  >
    
  </input>
</div>
<div class="mb-12">
  <label for="exampleInputEmail1" style={{float:"right",margin:"10px"}} class="form-label" >نام خانوادگی</label>
  <input  class="form-control" value={contact.family} readOnly placeholder="نام خانوادگی"  />
</div>
<div class="mb-12">
  <label for="exampleInputEmail1" style={{float:"right",margin:"10px"}} class="form-label"> ایمیل</label>
  <input  class="form-control" value={contact.email} readOnly placeholder="ایمیل"  />
</div>
<div class="mb-12">
  <label  style={{float:"right",margin:"10px"}} class="form-label"> تلفن</label>
  <input  class="form-control" value={contact.tell} readOnly placeholder="تلفن"  />
</div>
        </div>
         </div>
       
      </div>
  </div>
          </div>
          <div className="col-md-2"></div>
    </div>
  </section>)}
  
    </>
    
)
}
export default ContactInfo