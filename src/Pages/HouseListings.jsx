import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query } from "firebase/firestore";
import { fireDb } from "../firebase/FirebaseConfig";
import Loader from "../componet/Loader";

export const HouseListings = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        // const db = getFirestore(fireDb);
        const q = query(collection(fireDb, "homes")); // Create query
        const querySnapshot = await getDocs(q);
        const fetchedHouses = [];
        querySnapshot.forEach((doc) => {
          fetchedHouses.push({ id: doc.id, ...doc.data() });
        });
        console.log("Fetched Houses:", fetchedHouses); // Log fetched houses
        setHouses(fetchedHouses);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching houses: ", error);
        setLoading(false);
      }
    };

    fetchHouses();
  }, []);

  // Function to handle owner contact
  const ownerContact = (name, contact, location) => {
    // Implement your logic for owner contact here
    console.log("Owner Contact:", name, contact, location);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        houses.map((house) => (
          <div
            key={house.id}
            className="houseListing max-w-[1500px] border md:m-auto md:mt-10 p-5 shadow-2xl m-5 flex flex-col md:flex-row rounded-2xl"
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
                {house.ownerName}
              </h5>
              <p className="text-xl font-semibold text-gray-700">
                {house.price}
              </p>
              <div className="mt-3 border-t border-gray-300 pt-3 flex flex-col md:flex-row">
                <div className="flex-1">
                  <p className="font-normal text-gray-700 ">ContactNumber</p>
                  <p className="font-semibold text-gray-700 mb-2">
                    {house.contactNumber}
                  </p>
                  <p className="font-normal text-gray-700 ">House Facilities</p>
                  <p className="font-semibold text-gray-700 w-[50%]">
                    {house.facilities.join(", ")}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="font-normal text-gray-600">Address</p>
                  <p className="font-semibold text-gray-700">
                    {house.location}
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <p className="font-normal text-gray-600">Furnishing</p>
                <p className="font-semibold text-gray-700">
                  {house.furnishing}
                </p>
              </div>
              <div className="mt-3">
                <p className="font-normal text-gray-600">Accommodation Type</p>
                <p className="font-semibold text-gray-700">
                  {house.accommodationType}
                </p>
              </div>
              <div className="mt-3">
                <p className="font-normal text-gray-600">Description</p>
                <p className="font-semibold text-gray-700">
                  {house.roomDescription}
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-white text-blue-500 px-4 py-2 border border-blue-500 rounded mt-3 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  onClick={() =>
                    ownerContact(
                      house.ownerName,
                      house.contactNumber,
                      house.location
                    )
                  }
                >
                  Bookmark
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};
