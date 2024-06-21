// VisitsDisplay.jsx

import React from "react";

function VisitsDisplay({ visits }) {
  if (!visits || visits.length === 0) {
    return null; // Don't render anything if there are no visits
  }

  return (
    <>
      <section className="my-6 bg-sky-200 text-sky-900 p-4 rounded-md flex flex-col justify-center items-center gap-2">
        <h1 className="text-4xl font-bold">{visits.length}</h1>
        <h4>total visits</h4>
      </section>

      <section>
        <h2 className="text-center uppercase text-sm font-medium mb-4 text-slate-600">
          Visit History
        </h2>
        <ul className="text-md font-medium text-slate-500 bg-white border border-gray-200 rounded-lg">
          {visits.map((visit) => (
            <li
              key={visit._id}
              className="
              w-full
              p-4
              border-b border-gray-200 bg-slate-50 odd:bg-white first-of-type:rounded-t-lg last-of-type:rounded-b-lg last-of-type:border-b-0"
            >
              {new Date(visit.date).toLocaleDateString('en-GB')}
            </li> // Format the date nicely
          ))}
        </ul>
      </section>
    </>
  );
}

export default VisitsDisplay;
