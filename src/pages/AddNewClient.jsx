import React from "react";

function AddNewClient() {
  return (
    <section className="p-8">
      <h1 className="text-2xl text-center font-bold">Add a new client</h1>
      <hr className="my-8" />
      <form action="/submit-client-data" method="post">
        <div className="mb-8">
          <label
            htmlFor="name"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
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
            type="tel"
            id="phone"
            name="phone"
            required
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
            type="email"
            id="email"
            name="email"
            required
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

export default AddNewClient;
