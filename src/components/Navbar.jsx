import SearchContact from "./contact/SearchContact";
import {Link} from 'react-router-dom'
import { BACKGROUND, PURPLE } from "../helpers/Colores.js";
import { MContext } from "./context/contactContext";
import { useContext } from "react";
const Navbar = ({menuelist}) => {
  const {menue}=useContext(MContext)
  return (
   
    <nav
      className="navbar navbar-dark navbar-expand-sm shadow-lg"
      style={{ backgroundColor: BACKGROUND ,direction:"rtl"}}
    >
      <div className="container">
        <div className="row w-100">
          <div className="col-md-3">
            <div className="navbar-brand">
             
              <Link class="nav-link" to="/contacts">
              <i className="fa fa-user" style={{ color: PURPLE }} />{" "}
                 وب اپلیکیشن مدیریت{"  "}
              <span style={{ color: PURPLE }}>مخاطبین</span> </Link>
             
            </div>
            
          </div>
          <div className="col-md-6">
          <div class="collapse navbar-collapse" id="navbarNav">
   {
    <ul class="navbar-nav">
    {menue.map(x=>(
      <li class="nav-item active">
      <Link class="nav-link" to={x.to}>{x.name} </Link>      
      </li>
    ))}
      
      {/* <li>
      <Link class="nav-link" to="/contactinfo">درباره ما</Link>
      </li> */}
     
      
      
    </ul>
}
  </div>
          </div>
          <div className="col-md-3">
            <SearchContact />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
