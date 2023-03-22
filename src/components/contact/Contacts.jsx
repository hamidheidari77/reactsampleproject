import {PINK} from '../../helpers/Colores.js'
import Contact from '../contact/Contact.jsx'
import contactlist from '../../services/ContatcsList.js'
import React from 'react'
import {getAllContacts} from '../../services/contactServices.js'
import {MContext} from '../context/contactContext.js'
class Contacts extends React.Component {
  constructor()
  {
    super();
    this.colorChange=this.colorChange.bind(this)
  }
 
  colorChange= ()=> {
   getAllContacts()
    .then((response) => {
      console.log(response.data);
      this.setState({ contacts: response.data });
    });
  }
    state={
        contacts:[],
        searchtxt:""
    }
    componentDidMount=()=>
    {
      this.colorChange();
     
     
    }

    render(){
        return(
       
            <MContext.Provider value={{
              contacts:this.state.contacts
            }}>
          
          <section className="container" style={{direction:"rtl"}}>
            <div className="row">
              {/* with use props */}
              {/* <Contact contactlst={contacts} /> */}
               {/* with use context Api */}
              <Contact />
            </div>
          </section>
            </MContext.Provider>
            
        )
    }
   
}
export default Contacts