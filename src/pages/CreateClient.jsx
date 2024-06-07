import React, { useState } from "react";
import Axios from "axios";

function CreateClient() {
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    async function handleSubmit(e) {
      e.preventDefault();
        try {
            await Axios.post('http://localhost:8080/create-client', {
                name,
                phone,
                email
              })
              console.log("Success")
        } catch {
            console.log("Error")
        }
    }
  return (
    <section className="p-8">
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
            onChange={e => setName(e.target.value)}
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
            onChange={e => setPhone(e.target.value)}
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
            onChange={e => setEmail(e.target.value)}
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
    </section>
  );
}

export default CreateClient;
