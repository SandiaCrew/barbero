import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="w-full flex justify-center p-2 bg-zinc-900 gap-3 ">
          <li className="text-zinc-200 bg-zinc-800 rounded">
            <Link to="/" className="p-3 flex text-center w-full h-full">
              Home
            </Link>
          </li>
          <li className="text-zinc-200 bg-zinc-800 rounded">
            <Link to="/scan-qr" className="p-3 flex text-center w-full h-full">
              Scan QR
            </Link>
          </li>
          <li className="text-zinc-200 bg-zinc-800 rounded">
            <Link to="/add-new-client" className="p-3 flex text-center w-full h-full">
              Add Client
            </Link>
          </li>
          <li className="text-zinc-200 bg-zinc-800 rounded">
            <Link to="/clients" className="p-3 flex text-center w-full h-full">
              Clients
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
