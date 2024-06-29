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
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const params = useParams();

  useEffect(() => {
    async function fetchClientAndVisits() {
      setIsLoading(true);
      setError(null);  // Reset error state before fetching data
      setMessage(null);  // Reset message state before fetching data
      try {
        // Base URL from environment variables
        const baseURL = import.meta.env.VITE_API_BASE_URL;
        console.log(`Base URL: ${baseURL}`);
        console.log(`Client ID: ${params.id}`);

        // Fetch the client data
        const responseClient = await fetch(`${baseURL}/client/${params.id}`);
        if (!responseClient.ok) {
          throw new Error(`Failed to fetch client. Status: ${responseClient.status}`);
        }
        const dataClient = await responseClient.json();
        setClient(dataClient);

        // Fetch the visits data
        const responseVisits = await fetch(`${baseURL}/client/${params.id}/visits`);
        if (!responseVisits.ok) {
          throw new Error(`Failed to fetch visits. Status: ${responseVisits.status}`);
        }
        const dataVisits = await responseVisits.json();
        if (dataVisits.message) {
          setMessage(dataVisits.message);
        } else {
          setVisits(dataVisits);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError(error.message);
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

  if (error) {
    return <p>Error: {error}</p>;
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

      {message ? (
        <p>{message}</p>
      ) : (
        <VisitsDisplay visits={visits} className="mt-8"/>
      )}
    </Container>
  );
}

export default ViewSingleClient;
