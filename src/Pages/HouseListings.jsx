import React, { useState } from "react";
import houseData from "./../data.jsx";

const ContactModal = ({ isOpen, onClose, ownerContact }) => {
  const modalClass = isOpen ? "block" : "hidden";
  const ownerName = ownerContact?.name || "";
  const ownerContactNumber = ownerContact?.contact || "";
  const ownerAddress = ownerContact?.address || "";

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-50 overflow-auto ${modalClass}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-96 rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Contact Details</h2>
            <p>Name: {ownerName}</p>
            <p>Contact: {ownerContactNumber}</p>
            <p>Address: {ownerAddress}</p>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleClose}
          >
            Close
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

  const toggleModal = (name, contact, address) => {
    setOwnerContact({ name, contact, address });
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {houseData.map((house) => (
        <div
          key={house.id}
          className="max-w-[1500px] border md:m-auto md:mt-10 p-5 shadow-2xl m-5 flex flex-col md:flex-row rounded-2xl"
        >
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
                <p className="font-normal text-gray-600">Furnishing</p>
                <p className="font-semibold text-gray-700">
                  {house.furnishing}
                </p>
              </div>
              <div className="flex-1">
                <p className="font-normal text-gray-600">Accommodation Type</p>
                <p className="font-semibold text-gray-700">
                  {house.accomodationtype}
                </p>
              </div>
              <div className="flex-1">
                <p className="font-normal text-gray-600">Housing Type</p>
                <p className="font-semibold text-gray-700">
                  {house.housingtype}
                </p>
              </div>
            </div>
            {Array.isArray(house.facilities) ? (
              <div className="mt-3">
                <p className="font-normal text-gray-600">Facilities</p>
                <p className="font-semibold text-gray-700">
                  {house.facilities.join(", ")}
                </p>
              </div>
            ) : (
              <div className="mt-3">
                <p className="font-normal text-gray-600">Facilities</p>
                <p className="font-semibold text-gray-700">
                  {house.facilities}
                </p>
              </div>
            )}

            <div className="mt-3 text-sm text-gray-500">
              {house.description}
            </div>
            <div className="flex justify-end">
              <button
                className="bg-white text-blue-500 px-4 py-2 border border-blue-500 rounded mt-3 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                onClick={() =>
                  toggleModal(house.name, house.contact, house.location)
                }
              >
                Owner Contact
              </button>
            </div>
          </div>
        </div>
      ))}

      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        ownerContact={ownerContact}
      />
    </div>
  );
};
