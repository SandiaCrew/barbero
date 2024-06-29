import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import QRCodeDisplay from '../components/QRCodeDisplay';
import VisitsDisplay from '../components/VisitsDisplay';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

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
        // Base URL from environment variables
        const baseURL = import.meta.env.VITE_API_BASE_URL;

        // Fetch the client data
        const responseClient = await fetch(`${baseURL}/client/${params.id}`);
        if (!responseClient.ok) {
          throw new Error('Failed to fetch client');
        }
        const dataClient = await responseClient.json();
        setClient(dataClient);

        // Fetch the visits data
        const responseVisits = await fetch(`${baseURL}/client/${params.id}/visits`);
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
      
      <h1 className="text-2xl text-center font-bold text-sky-950 uppercase mb-3">{client.name}</h1>
      
      <ul className="border rounded-md text-lg mb-8">
        <li className='flex justify-start items-center gap-4 p-4 text-gray-700 border-b'>
          <FaPhoneAlt /> {client.phone}
        </li>
        <li className='flex justify-start items-center gap-4 p-4'>
          <IoMailOutline /> <Link to={`mailto:${client.email}`} className='underline text-sky-500 hover:text-sky-800'>{client.email}</Link>
        </li>
      </ul>

      <button onClick={toggleQRCode} className="mb-4 p-4 w-full bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
        {showQRCode ? 'Hide QR Code' : 'Show QR Code'}
      </button> {/* Button to toggle the QR code visibility */}

      {showQRCode && <QRCodeDisplay qrCode={client.qrCode} />} {/* Conditional rendering based on showQRCode state */}

      <VisitsDisplay visits={visits} className="mt-8"/>
    </Container>
  );
}

export default ViewSingleClient;
