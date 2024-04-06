import React, { useState, useEffect } from "react";
import houseData from "./../data.jsx";

const HouseCard = ({ house, ownerContact }) => {
  return (
    <div className="houseListing max-w-[1500px] border md:m-auto md:mt-10 p-5 shadow-2xl m-5 flex flex-col md:flex-row rounded-2xl">
      <div className="order-2 md:order-1">
        <img
          src={house.image}
          className="md:h-500px rounded-xl md:w-56 md:h-auto m-auto"
          alt="House"
        />
      </div>
      <div className="ml-3 flex-grow order-2 md:order-2">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          {house.price}
        </h5>
        <p className="text-xl font-semibold text-gray-700">{house.type}</p>
        <p className="font-normal text-gray-600">{house.location}</p>
        <div className="mt-3 border-t border-gray-300 pt-3 flex flex-col md:flex-row">
          <div className="flex-1">
            <p className="font-normal text-gray-600">Owner Name</p>
            <p className="font-semibold text-gray-700">{house.name}</p>
          </div>
          <div className="flex-1">
            <p className="font-normal text-gray-600">Contact Number</p>
            <p className="font-semibold text-gray-700">{house.contact}</p>
          </div>
          <div className="flex-1">
            <p className="font-normal text-gray-600">Address</p>
            <p className="font-semibold text-gray-700">{house.location}</p>
          </div>
        </div>
        <div className="mt-3">
          <p className="font-normal text-gray-600">Furnishing</p>
          <p className="font-semibold text-gray-700">{house.furnishing}</p>
        </div>
        <div className="mt-3">
          <p className="font-normal text-gray-600">Facilities</p>
          <p className="font-semibold text-gray-700">{house.facilities}</p>
        </div>
        <div className="mt-3">
          <p className="font-normal text-gray-600">Accommodation Type</p>
          <p className="font-semibold text-gray-700">
            {house.accomodationtype}
          </p>
        </div>
        <div className="mt-3">
          <p className="font-normal text-gray-600">Description</p>
          <p className="font-semibold text-gray-700">{house.description}</p>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-white text-blue-500 px-4 py-2 border border-blue-500 rounded mt-3 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            onClick={() =>
              ownerContact(house.name, house.contact, house.location)
            }
          >
            Bookmark
          </button>
        </div>
      </div>
    </div>
  );
};

const RegistrationCard = ({ registrationData, ownerContact }) => {
  return (
    <div className="houseListing max-w-[1500px] border md:m-auto md:mt-10 p-5 shadow-2xl m-5 flex flex-col md:flex-row rounded-2xl">
      <div className="order-2 md:order-1">
        <img
          src={registrationData.image}
          className="md:h-500px rounded-xl md:w-56 md:h-auto m-auto"
          alt="House"
        />
      </div>
      <div className="ml-3 flex-grow order-2 md:order-2">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          ₹ {registrationData.price}
        </h5>
        <p className="text-xl font-semibold text-gray-700">Room For Rent</p>


        <p className="text-xl font-semibold text-gray-700">
          {registrationData.type}
        </p>
        <div className="mt-3 border-t border-gray-300 pt-3 flex flex-col md:flex-row">
          <div className="flex-1">
            <p className="font-normal text-gray-600">Owner Name</p>
            <p className="font-semibold text-gray-700">
              {registrationData.ownerName}
            </p>
          </div>
          <div className="flex-1">
            <p className="font-normal text-gray-600">Contact Number</p>
            <p className="font-semibold text-gray-700">
              {registrationData.contactNumber}
            </p>
          </div>
          <div className="flex-1">
            <p className="font-normal text-gray-600">Address</p>
            <p className="font-semibold text-gray-700">
              {registrationData.location}
            </p>
          </div>
        </div>
        <div className="mt-3">
          <p className="font-normal text-gray-600">Furnishing</p>
          <p className="font-semibold text-gray-700">
            {registrationData.furnishing}
          </p>
        </div>
        <div className="mt-3">
          <p className="font-normal text-gray-600">Facilities</p>
          <p className="font-semibold text-gray-700">
            {Array.isArray(registrationData.facilities)
              ? registrationData.facilities.join(", ")
              : registrationData.facilities}
          </p>
        </div>
        <div className="mt-3">
          <p className="font-normal text-gray-600">Accommodation Type</p>
          <p className="font-semibold text-gray-700">
            {registrationData.accommodationType}
          </p>
        </div>
        <div className="mt-3">
          <p className="font-normal text-gray-600">Room Description</p>
          <p className="font-semibold text-gray-700">
            {registrationData.roomDescription}
          </p>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-white text-blue-500 px-4 py-2 border border-blue-500 rounded mt-3 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            onClick={() =>
              ownerContact(
                registrationData.ownerName,
                registrationData.contactNumber,
                registrationData.address
              )
            }
          >
            Bookmark
          </button>
        </div>
      </div>
    </div>
  );
};

export const HouseListings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ownerContact, setOwnerContact] = useState({
    name: "",
    contact: "",
    address: "",
  });

  const handleOwnerContact = (name, contact, address) => {
    setOwnerContact({ name, contact, address });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [registrationData, setRegistrationData] = useState(null);

  useEffect(() => {
    // Fetch registration data from local storage or API
    const savedData = localStorage.getItem("registeredHome");
    if (savedData) {
      setRegistrationData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="mb-10">
      {houseData.map((house, index) => (
        <HouseCard
          key={index}
          house={house}
          ownerContact={handleOwnerContact}
        />
      ))}
      {/* Displaying registration data if available */}
      {registrationData && (
        <RegistrationCard registrationData={registrationData} />
      )}
    </div>
  );
};

