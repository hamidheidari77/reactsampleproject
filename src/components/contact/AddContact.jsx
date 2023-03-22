import { Link,useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import  Spinner  from "../Spinner.jsx";
import { COMMENT, GREEN, PURPLE } from "../../helpers/Colores.js";
import {createContact} from '../../services/contactServices.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddContact=()=>{
  const [getloading, setLoading] = useState({loading:false});
  
  const [forceRender, setForceRender] = useState(false);
  const [getContact, setContact] = useState({
    name: "",
    family: "",
    tell: "",
    email: "",
   
  });
  const setContactInfo = (event) => {
    setContact({
      ...getContact,
      [event.target.name]: event.target.value,
    });
  };
  const createContactForm = async (event) => {
   
   setLoading({loading:true})
     event.preventDefault();
     
    
     try {
     
    
      const { status } = await createContact(getContact);
      if (status === 200) {
      setContact({
        name: "",
    family: "",
    tell: "",
    email: "",
      });
      setLoading({loading:false})
      toast("عملیات با موفقیت انجام شد!")
      }
      else  {
        setLoading({loading:false})
        toast("خطا در انجام عملیات")
      
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const { loading } = getloading;
  const {contact}=getContact;
 console.log(loading)
  return(
   
    <>
<ToastContainer />
    {loading?(<Spinner/>):(
      <div className="container" style={{direction:"rtl"}}>
           <div className="row">
           
           <div className="col-md-4"></div>
                <div className="col-md-4" style={{margin:"10px"}}>
                <div class="card" >
  <div class="card-body">
  <form onSubmit={createContactForm}>
                    <div className="mb-2">
                      <input
                        name="name"
                        type="text"
                        value={getContact.name}
                        onChange={setContactInfo}
                        className="form-control"
                        placeholder="نام "
                        id="name"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                    <input
                        name="family"
                        type="text"
                        value={getContact.family}
                        onChange={setContactInfo}
                        className="form-control"
                        placeholder=" نام خانوادگی"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="tell"
                        type="text"
                        value={getContact.tell}
                        onChange={setContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="شماره موبایل"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="email"
                        name="email"
                        value={getContact.email}
                        onChange={setContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="آدرس ایمیل"
                      />
                    </div>
                    
                   
                    <div className="mx-2">
                      <input
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: PURPLE }}
                        value="ساخت مخاطب"
                      />
                      <Link
                        to={"/contacts"}
                        className="btn mx-2"
                        style={{ backgroundColor: COMMENT }}
                      >
                        انصراف
                      </Link>
                    </div>
                  </form>
  </div>
                 </div>
                </div>
                <div className="col-md-4"></div>
              </div>
      </div>
    ) 
    }
    </>
  )
}
export default AddContact;