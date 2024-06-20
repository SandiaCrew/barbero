// VisitsDisplay.jsx

import React from 'react';

function VisitsDisplay({ visits }) {
  if (!visits || visits.length === 0) {
    return null; // Don't render anything if there are no visits
  }

  return (
    <>
      <h2>Total Visits: <span>{visits.length}</span></h2>
      <h2>Visit History</h2>
      <ul>
        {visits.map(visit => (
          <li key={visit._id}>{new Date(visit.date).toLocaleString()}</li> // Format the date nicely
        ))}
      </ul>
      <hr className='my-8'></hr>
    </>
  );
}

export default VisitsDisplay;
