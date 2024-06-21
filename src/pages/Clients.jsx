import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

import Container from '../components/Container'

function Clients() {
  const [clients, setClients] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8080/clients')
         .then(response => {
             setClients(response.data);  // Assuming the data is an array of client objects
         })
         .catch(error => {
             console.error('Error loading clients:', error);
         });
  }, []);
        

  return (
    <Container className={'flex flex-col'}>
      <h1 className="text-2xl text-center font-bold">Clients</h1>
      <hr className="my-8" />

      <ul className="text-md font-medium text-sky-700 bg-white border border-gray-200 rounded-lg">
        {clients.map(client => (
          <li key={client._id} className="first-of-type:rounded-t-lg last-of-type:rounded-b-lg last-of-type:border-b-0 bg-slate-50 odd:bg-white border-b">
            <Link to={`/client/${client._id}`} className="block w-full px-4 py-6 cursor-pointer hover:bg-slate-200">{client.name}</Link>
          </li>
          ))}
      </ul>

      
    </Container>
  )
}

export default Clients