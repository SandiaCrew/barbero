import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import QRCodeDisplay from '../components/QRCodeDisplay';
import VisitsDisplay from '../components/VisitsDisplay';

function ViewSingleClient() {
  const [isLoading, setIsLoading] = useState(true);
  const [client, setClient] = useState(null);
  const [visits, setVisits] = useState([]);
  const [showQRCode, setShowQRCode] = useState(false);  // State to control QR code visibility

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

  const toggleQRCode = () => {  // Function to toggle QR code visibility
    setShowQRCode(!showQRCode);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!client) {
    return <p>No client data found.</p>;
  }

  return (
    <Container className={'flex flex-col'}>
      <h1 className="text-2xl text-center font-bold">{client.name}</h1>
      <hr className="my-4" />

      <h2 className='text-2xl mb-3'>{client.phone}</h2>
      <h3 className='text-2xl'><Link to={`mailto:${client.email}`}>{client.email}</Link></h3>
      <hr className='my-4'></hr>

      <button onClick={toggleQRCode} className="my-2 p-4 w-full bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
        {showQRCode ? 'Hide QR Code' : 'Show QR Code'}
      </button> {/* Button to toggle the QR code visibility */}
      <hr className='my-4'></hr
      >
      {showQRCode && <QRCodeDisplay qrCode={client.qrCode} />} {/* Conditional rendering based on showQRCode state */}
      <VisitsDisplay visits={visits} />
    </Container>
  );
}

export default ViewSingleClient;
