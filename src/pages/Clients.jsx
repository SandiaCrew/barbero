import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Container from '../components/Container'

function Clients() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');  // State to hold the search term
  
  useEffect(() => {
    const fetchClients = async () => {
      try {
        // Base URL from environment variables
        const baseURL = import.meta.env.VITE_API_BASE_URL;

        const response = await axios.get(`${baseURL}/clients`);
        setClients(response.data);  // Assuming the data is an array of client objects
      } catch (error) {
        console.error('Error loading clients:', error);
      }
    };

    fetchClients();
  }, []);

  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );  // Filter clients based on search term, case insensitive        

  return (
    <Container className={'flex flex-col'}>
      <h1 className="text-2xl text-center font-bold">Clients</h1>
      <hr className="my-8" />

      <input
        type="text"
        placeholder="Search clients..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}  // Update search term on input change
        className="bg-gray-50 border border-gray-300 block w-full p-4 mb-4 rounded-md outline-slate-300 outline-1"
      />

      <ul className="text-md font-medium text-sky-700 bg-white border border-gray-200 rounded-lg">
        {filteredClients.map(client => (
          <li key={client._id} className="first-of-type:rounded-t-lg last-of-type:rounded-b-lg last-of-type:border-b-0 bg-slate-50 odd:bg-white border-b">
            <Link to={`/client/${client._id}`} className="block w-full px-4 py-6 cursor-pointer hover:bg-slate-200">{client.name}</Link>
          </li>
          ))}
      </ul>
    </Container>
  )
}

export default Clients
