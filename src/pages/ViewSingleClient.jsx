import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Ensure you import useParams
import Container from './Container';
import { Link } from 'react-router-dom';

function ViewSingleClient() {
  const [isLoading, setIsLoading] = useState(true);
  const [client, setClient] = useState(null);

  const params = useParams(); // This hook extracts params from the URL

  useEffect(() => {
    async function fetchClient() {
      try {
        const response = await fetch(`http://localhost:8080/client/${params.id}`); // Use backticks for template literals
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setClient(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setIsLoading(false); // Consider setting an error state to show error messages to users
      }
    }

    fetchClient();
  }, [params.id]); // Dependency array includes params.id to refetch if it changes

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!client) {
    return <p>No client data found.</p>; // Handle case where no client data is available
  }

  return (
    <Container className={'flex flex-col'}>
      <h1 className='text-4xl uppercase text-center text-brown-500'>{client.name}</h1>
      <hr className='my-8'></hr>
      <h2 className='text-2xl mb-3'>{client.phone}</h2>
      <h3 className='text-2xl'><Link to={`mailto:${client.email}`}>{client.email}</Link></h3>
      <hr className='my-8'></hr>
      {client.qrcode && (
        <>
          <p>Here we will put the generated QR code</p>
          <img src={client.qrcode} alt="QR Code" />
          <hr className='my-8'></hr>
        </>
      )}
      {client.appointments && client.appointments.length > 0 && (
        <>
          <h2>History</h2>
          <p>Here we will put the history of appointments</p>
        </>
      )}
    </Container>
  );
}

export default ViewSingleClient;
