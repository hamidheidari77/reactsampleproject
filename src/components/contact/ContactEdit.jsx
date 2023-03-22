import { Link,useNavigate,useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import  Spinner  from "../Spinner.jsx";
import { COMMENT, GREEN, PURPLE,ORANGE } from "../../helpers/Colores.js";
import {EditContact,getContact} from '../../services/contactServices.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactEdit=()=>{
  const { id } = useParams();
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  const navigate = useNavigate();
  const [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
    family: "",
    tell: "",
    email: "",
    }
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

    const setContactInfo = (event) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: [event.target.value],
      },
    });
  };
  const createContactForm = async (event) => {
    event.preventDefault();
    
    try {
      setState({ ...state, loading: true });
     
      const req={
        contact: {
          name: Array.isArray(state.contact.name)?state.contact.name[0]:state.contact.name,
        family: Array.isArray(state.contact.family)?state.contact.name[0]:state.contact.family,
        tell: Array.isArray(state.contact.tell)?state.contact.tell[0]:state.contact.tell,
        email: Array.isArray(state.contact.email)?state.contact.email[0]:state.contact.email,
        }
      }
      const { status } = await EditContact(req.contact, id);
    
      if (status === 200) {
        setState({ ...state, loading: false });
        
      
        toast("عملیات با موفقیت انجام شد!");
                await delay(1000);

        navigate("/contacts");
        }

      else{
        console.log(status);
        toast("خطا در انجام عملیات")
        setState({ ...state, loading: false });
      }
      
     
    } catch (err) {
      console.log(err);
      toast("خطا در انجام عملیات")
      setState({ ...state, loading: false });
    }
    
     
  };
  const { loading, contact, groups } = state;
  return(
   
    <>
<ToastContainer />
    {loading?(<Spinner/>):(
      <div className="container" style={{direction:"rtl"}}>
          <>
          <section className="p-3">
            <div className="container">
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
          <form onSubmit={createContactForm}>
                    <div className="mb-2">
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        value={contact.name}
                        onChange={setContactInfo}
                        required={true}
                        placeholder="نام و نام خانوادگی"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="family"
                        type="text"
                        value={contact.family}
                        onChange={setContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="نام خانوادگی"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="tell"
                        type="number"
                        className="form-control"
                        value={contact.tell}
                        onChange={setContactInfo}
                        required={true}
                        placeholder="شماره موبایل"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        value={contact.email}
                        onChange={setContactInfo}
                        required={true}
                        placeholder="آدرس ایمیل"
                      />
                    </div>
                  
                  
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: PURPLE }}
                        value="ویرایش مخاطب"
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
  </div>
          </div>
          <div className="col-md-2"></div>
    </div> 
             
            </div>

          
          </section>
        </>
      </div>
    ) 
    }
    </>
  )
}
export default ContactEdit;