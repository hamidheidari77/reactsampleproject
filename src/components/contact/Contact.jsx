import { CURRENTLINE, CYAN, ORANGE, PURPLE, RED } from "../../helpers/Colores.js";
import NotFound from '../../assets/no-found.gif'
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {deleteContact} from '../../services/contactServices.js'
import { confirmAlert } from 'react-confirm-alert'; // Import
import { useNavigate } from "react-router-dom";
import { MContext } from "../context/contactContext.js";
import { useContext } from "react";
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
 const Contact=()=>  {
  const{contacts}=useContext(MContext)
  const [getloading, setLoading] = useState({loading:false});
  const navigate = useNavigate();
  const Delete = async (id) => {
    const { status } = await deleteContact(id);
    if (status === 200) {
  
    
    toast("عملیات با موفقیت انجام شد!")
    navigate("/");
    }
    else{
      toast("خطا در انجام عملیات!")
    }
}
  const delete_Contact=(id) => {
    confirmAlert({
      title: '؟آیا از حذف داده مطمئن هستید',
      message: 'در صورت حذف اطلاعات از دست خواهد رفت',
      buttons: [
        {
          label: 'بله',
         onClick: () => Delete(id)
        },
        {
          label: 'خیر',
          //onClick: () => alert('Click No')
        }
      ]
    });
   
   
   };
  return (
    
 <div className="row" >
 <ToastContainer />
  {
  contacts.length>0?contacts.map(x=>(
        <div className="col-md-6">
        <div style={{ backgroundColor: CURRENTLINE }} className="card my-2">
          <div className="card-body">
            <div className="row align-items-center d-flex justify-content-around">
              <div className="col-md-4 col-sm-4">
                <img
                  src="https://via.placeholder.com/200"
                  alt=""
                  style={{ border: `1px solid ${PURPLE}` }}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-7 col-sm-7">
                <ul className="list-group">
                  <li className="list-group-item list-group-item-dark">
                    نام و نام خانوداگی :{"  "}
                    <span className="fw-bold">
                      {x.name} {x.family}
                    </span>
                  </li>
  
                  <li className="list-group-item list-group-item-dark">
                    شماره موبایل :{"  "}
                    <span className="fw-bold">
                      {x.tell}
                    </span>
                  </li>
  
                  <li className="list-group-item list-group-item-dark">
                    آدرس ایمیل :{"  "}
                    <span className="fw-bold">
                     {x.email}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
              <Link className="btn my-1"  style={{ backgroundColor: ORANGE }} to={`/contactinfo/${x.id}`}  >
              <i className="fa fa-eye" />
              </Link>
                {/* <button
                  className="btn my-1"
                  style={{ backgroundColor: ORANGE }}
                >
                  <i className="fa fa-eye" />
                </button> */}
  
  <Link className="btn my-1"  style={{ backgroundColor: ORANGE }} to={`/EditContact/${x.id}`}  >
  <i class="fa fa-edit"></i>
              </Link>
                
                <button
                  className="btn my-1"
                  style={{ backgroundColor: RED }}
                  onClick={() => delete_Contact(x.id) }
                >
                  <i className="fa fa-trash" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )):
  (
    <div
      className="text-center py-5"
      style={{ backgroundColor: CURRENTLINE }}
    >
      <p className="h3" style={{ color: ORANGE }}>
        مخاطب یافت نشد ...
      </p>
      <img
        src={NotFound}
        alt="پیدا نشد"
        className="w-25"
      />
    </div>
  )
}
 
   
    </div>
   
   
  
  );
};

export default Contact;
