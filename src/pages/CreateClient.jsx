import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Container from "../components/Container";

function CreateClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await Axios.post(`${import.meta.env.VITE_API_BASE_URL}/create-client`, {
        name,
        phone,
        email
      });
      // redirect to single client page
      navigate(`/client/${response.data.id}`);
    } catch (error) {
      console.log("Error", error.response ? error.response.data : error.message);
    }
  }

  return (
    <Container className={"flex flex-col"}>
      <h1 className="text-2xl text-center font-bold">Add a new client</h1>
      <hr className="my-8" />
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <label
            htmlFor="name"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Name:
          </label>
          <input
            autoFocus
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="phone"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Phone:
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            id="phone"
            name="phone"
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="email"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Email:
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Client
        </button>
      </form>
    </Container>
  );
}

export default CreateClient;
