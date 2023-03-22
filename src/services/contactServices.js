import axios from 'axios'
const SERVER_URL="http://localhost:5042"
export const getAllContacts=()=>{
const url=`${SERVER_URL}/api/Contact/Contacts`
return axios.get(url);
}
export const getContact=(id)=>{
    const url=`${SERVER_URL}/api/Contact/${id}`
    return axios.get(url);
    }
    export const deleteContact=(id)=>{
        const url=`${SERVER_URL}/api/Contact/Delete/${id}`
        return axios.get(url);
        }
export const createContact=(contact)=>{
    const url=`${SERVER_URL}/api/Contact/Create`
    return  axios.post(
        url,
        {
            'id': 0,
            'name': contact.name,
            'family': contact.family,
            'tell': contact.tell,
            'email': contact.email
        },
        {
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            }
        }
    );
}
export const EditContact=(contact,id)=>{
    const url=`${SERVER_URL}/api/Contact/Edit`

   return axios.post(
        url,
        {
            'id': id,
            'name': contact.name,
            'family': contact.family,
            'tell': contact.tell,
            'email': contact.email
        },
        {
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            }
        }
    );
}
export const getContactSearch=(txt)=>{
    const url=`${SERVER_URL}/api/Contact/Contacts/${txt}`
    return axios.get(url);
    }
