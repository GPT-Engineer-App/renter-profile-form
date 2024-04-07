import React from "react";
import { FaUser, FaHome, FaDollarSign, FaBriefcase, FaPhone } from "react-icons/fa";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Property Rental Application</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Renter Profile</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            <FaUser className="inline-block mr-2" />
            Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">
            <FaUser className="inline-block mr-2" />
            Date of Birth
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dob" type="date" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="currentAddress">
            <FaHome className="inline-block mr-2" />
            Current Address
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="currentAddress" type="text" placeholder="Enter your current address" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="priorAddress">
            <FaHome className="inline-block mr-2" />
            Prior Address
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="priorAddress" type="text" placeholder="Enter your prior address" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="income">
            <FaDollarSign className="inline-block mr-2" />
            Income
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="income" type="number" placeholder="Enter your income" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="occupation">
            <FaBriefcase className="inline-block mr-2" />
            Occupation
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="occupation" type="text" placeholder="Enter your occupation" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="assets">
            <FaDollarSign className="inline-block mr-2" />
            Assets
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="assets" rows="3" placeholder="Enter your assets"></textarea>
        </div>

        <h3 className="text-xl font-bold mb-2">References</h3>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="referenceName">
            <FaUser className="inline-block mr-2" />
            Reference Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="referenceName" type="text" placeholder="Enter reference name" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="referenceRelationship">
            <FaUser className="inline-block mr-2" />
            Relationship
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="referenceRelationship" type="text" placeholder="Enter reference relationship" />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="referencePhone">
            <FaPhone className="inline-block mr-2" />
            Phone Number
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="referencePhone" type="tel" placeholder="Enter reference phone number" />
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
