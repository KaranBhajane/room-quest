import React, { useState, useEffect } from "react";


export const HouseListings = ({ }) => {
  return (
    <div className="houseListing max-w-[1500px] border md:m-auto md:mt-10 p-5 shadow-2xl m-5 flex flex-col md:flex-row rounded-2xl">
      <div className="order-2 md:order-1">
        <img
          src=""
          className="md:h-500px rounded-xl md:w-56 md:h-auto m-auto"
          alt="House"
        />
      </div>
      <div className="ml-3 flex-grow order-2 md:order-2">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          test
        </h5>
        <p className="text-xl font-semibold text-gray-700">test</p>
        <p className="font-normal text-gray-600">test</p>
        <div className="mt-3 border-t border-gray-300 pt-3 flex flex-col md:flex-row">
          <div className="flex-1">
            <p className="font-normal text-gray-600">test</p>
            <p className="font-semibold text-gray-700">test</p>
          </div>
          <div className="flex-1">
            <p className="font-normal text-gray-600">Contact Number</p>
            <p className="font-semibold text-gray-700">test</p>
          </div>
          <div className="flex-1">
            <p className="font-normal text-gray-600">Address</p>
            <p className="font-semibold text-gray-700">test</p>
          </div>
        </div>
        <div className="mt-3">
          <p className="font-normal text-gray-600">Furnishing</p>
          <p className="font-semibold text-gray-700">test</p>
        </div>
        <div className="mt-3">
          <p className="font-normal text-gray-600">Facilities</p>
          <p className="font-semibold text-gray-700">test</p>
        </div>
        <div className="mt-3">
          <p className="font-normal text-gray-600">Accommodation Type</p>
          <p className="font-semibold text-gray-700">
          test
          </p>
        </div>
        <div className="mt-3">
          <p className="font-normal text-gray-600">Description</p>
          <p className="font-semibold text-gray-700">test</p>
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

