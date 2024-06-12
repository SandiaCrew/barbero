import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import { Link } from 'react-router-dom';

function ViewSingleClient() {
  const [isLoading, setIsLoading] = useState(true);
  const [client, setClient] = useState(null);
  const [visits, setVisits] = useState([]); // Add a state to store visits

  const params = useParams();

  useEffect(() => {
    async function fetchClientAndVisits() {
      setIsLoading(true);
      try {
        // Fetch the client data
        const responseClient = await fetch(`http://localhost:8080/client/${params.id}`);
        if (!responseClient.ok) {
          throw new Error('Failed to fetch client');
        }
        const dataClient = await responseClient.json();
        setClient(dataClient);

        // Fetch the visits data
        const responseVisits = await fetch(`http://localhost:8080/client/${params.id}/visits`);
        if (!responseVisits.ok) {
          throw new Error('Failed to fetch visits');
        }
        const dataVisits = await responseVisits.json();
        setVisits(dataVisits);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
      setIsLoading(false);
    }

    fetchClientAndVisits();
  }, [params.id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!client) {
    return <p>No client data found.</p>;
  }

  return (
    <Container className={'flex flex-col'}>
      <h1 className="text-2xl text-center font-bold">{client.name}</h1>
      <hr className="my-8" />

      <h2 className='text-2xl mb-3'>{client.phone}</h2>
      <h3 className='text-2xl'><Link to={`mailto:${client.email}`}>{client.email}</Link></h3>
      <hr className='my-8'></hr>
      {client.qrcode && (
        <>
          <img src={client.qrcode} alt="QR Code" />
          <hr className='my-8'></hr>
        </>
      )}
      {visits.length > 0 && (
        <>
          <h2>Total Visits: <span>{visits.length}</span></h2>
          <h2>Visit History</h2>
          <ul>
            {visits.map(visit => (
              <li key={visit._id}>{new Date(visit.date).toLocaleString()}</li> // Format the date nicely
            ))}
          </ul>
        </>
      )}
    </Container>
  );
}

export default ViewSingleClient;
