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

      <ul className="divide-y divide-gray-100 rounded-lg border border-gray-200">
        {clients.map(client => (
          <li key={client._id} className="flex items-center justify-between text-sm leading-6 odd:bg-slate-50 hover:bg-slate-100">
            <Link to={`/client/${client._id}`} className="inline-block w-full p-5 font-semibold text-xl">{client.name}</Link>
          </li>
          ))}
      </ul>

      
    </Container>
  )
}

export default Clients