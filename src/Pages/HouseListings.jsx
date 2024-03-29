import React from "react";
import house1 from "./../assets/house1.jpg";
import house2 from "./../assets/house2.jpg";
import house3 from "./../assets/house3.jpg";
import house4 from "./../assets/house4.jpg";
import house5 from "./../assets/house5.jpg";
import house6 from "./../assets/house6.jpg";

export const HouseListings = () => {
  return (
    <div>
      <div className="max-w-[800px] border md:m-auto md:mt-10 p-5 shadow-2xl m-5 flex flex-col md:flex-row rounded-2xl">
        <div className="order-2 md:order-1">
          <img
            src={house1}
            className="md:h-500px rounded-xl md:w-56 md:h-auto m-auto"
          />
        </div>
        <div className="ml-3 flex-grow order-2 md:order-2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            &#8377; 7000
          </h5>
          <p className="text-xl font-semibold text-gray-700">
            Independent Room for rent
          </p>
          <p className="font-normal text-gray-600">Vasudev Nagar, Nagpur</p>
          <div className="mt-3 border-t border-gray-300 pt-3 flex flex-col md:flex-row">
            <div className="flex-1">
              <p className="font-normal text-gray-600">Furnishing</p>
              <p className="font-semibold text-gray-700">Fully Furnished</p>
            </div>
            <div className="flex-1">
              <p className="font-normal text-gray-600">Built-up Area</p>
              <p className="font-semibold text-gray-700">1000 sqft</p>
            </div>
            <div className="flex-1">
              <p className="font-normal text-gray-600">Bathroom</p>
              <p className="font-semibold text-gray-700">1</p>
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-500">
            Ideal for students or professionals seeking a quiet, fully furnished
            space with convenient access to amenities.
          </div>
          <div className="flex justify-end">
            <button className="bg-white text-blue-500 px-4 py-2 border border-blue-500 rounded mt-3 hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Owner Contact
            </button>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="max-w-[800px] border md:m-auto md:mt-10 p-5 shadow-2xl m-5 flex flex-col md:flex-row mb-10 rounded-2xl">
        <div className="order-2 md:order-1">
          <img
            src={house2}
            className="md:h-800px rounded-xl md:w-[600px] md:h-auto m-auto"
          />
        </div>
        <div className="ml-3 flex-grow order-2 md:order-2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            &#8377; 9000
          </h5>
          <p className="text-xl font-semibold text-gray-700">Room for rent</p>
          <p className="font-normal text-gray-600">Lokmanya Nagar, Nagpur</p>
          <div className="mt-3 border-t border-gray-300 pt-3 flex flex-col md:flex-row">
            <div className="flex-1">
              <p className="font-normal text-gray-600">Furnishing</p>
              <p className="font-semibold text-gray-700">Semi Furnished</p>
            </div>
            <div className="flex-1">
              <p className="font-normal text-gray-600">Built-up Area</p>
              <p className="font-semibold text-gray-700">1100 sqft</p>
            </div>
            <div className="flex-1">
              <p className="font-normal text-gray-600">Bathroom</p>
              <p className="font-semibold text-gray-700">2</p>
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-500">
            Perfect for those looking for a cozy, well-equipped living space
            near essential facilities.
          </div>
          <div className="flex justify-end">
            <button className="bg-white text-blue-500 px-4 py-2 border border-blue-500 rounded mt-3 hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Owner Contact
            </button>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="max-w-[800px] border md:m-auto md:mt-10 p-5 shadow-2xl m-5 flex flex-col md:flex-row mb-10 rounded-2xl">
        <div className="order-2 md:order-1">
          <img
            src={house3}
            className="md:h-500px rounded-xl md:w-56 md:h-auto m-auto"
          />
        </div>
        <div className="ml-3 flex-grow order-2 md:order-2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            &#8377; 4000
          </h5>
          <p className="text-xl font-semibold text-gray-700">
            Independent Room for rent
          </p>
          <p className="font-normal text-gray-600">Rachana Ring Road, Nagpur</p>
          <div className="mt-3 border-t border-gray-300 pt-3 flex flex-col md:flex-row">
            <div className="flex-1">
              <p className="font-normal text-gray-600">Furnishing</p>
              <p className="font-semibold text-gray-700">UnFurnished</p>
            </div>
            <div className="flex-1">
              <p className="font-normal text-gray-600">Built-up Area</p>
              <p className="font-semibold text-gray-700">150 sqft</p>
            </div>
            <div className="flex-1">
              <p className="font-normal text-gray-600">Bathroom</p>
              <p className="font-semibold text-gray-700">1</p>
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-500">
            Tailored for individuals seeking a peaceful, fully furnished
            accommodation with easy access to local conveniences.
          </div>
          <div className="flex justify-end">
            <button className="bg-white text-blue-500 px-4 py-2 border border-blue-500 rounded mt-3 hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Owner Contact
            </button>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="max-w-[800px] border md:m-auto md:mt-10 p-5 shadow-2xl m-5 flex flex-col md:flex-row mb-10 rounded-2xl">
        <div className="order-2 md:order-1">
          <img
            src={house4}
            className="md:h-500px rounded-xl md:w-[600px] md:h-auto m-auto"
          />
        </div>
        <div className="ml-3 flex-grow order-2 md:order-2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            &#8377; 8000
          </h5>
          <p className="text-xl font-semibold text-gray-700">Independent Room for rent</p>
          <p className="font-normal text-gray-600">Wadi , Nagpur</p>
          <div className="mt-3 border-t border-gray-300 pt-3 flex flex-col md:flex-row">
            <div className="flex-1">
              <p className="font-normal text-gray-600">Furnishing</p>
              <p className="font-semibold text-gray-700">UnFurnished</p>
            </div>
            <div className="flex-1">
              <p className="font-normal text-gray-600">Built-up Area</p>
              <p className="font-semibold text-gray-700">1150 sqft</p>
            </div>
            <div className="flex-1">
              <p className="font-normal text-gray-600">Bathroom</p>
              <p className="font-semibold text-gray-700">1</p>
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-500">
          Designed for students or professionals in search of a tranquil, fully furnished home with nearby amenities.
          </div>
          <div className="flex justify-end">
            <button className="bg-white text-blue-500 px-4 py-2 border border-blue-500 rounded mt-3 hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Owner Contact
            </button>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="max-w-[800px] border md:m-auto md:mt-10 p-5 shadow-2xl m-5 flex flex-col md:flex-row mb-10 rounded-2xl">
        <div className="order-2 md:order-1">
          <img
            src={house5}
            className="md:h-500px rounded-xl md:w-56 md:h-auto m-auto"
          />
        </div>
        <div className="ml-3 flex-grow order-2 md:order-2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            &#8377; 4000
          </h5>
          <p className="text-xl font-semibold text-gray-700">
            Independent Room for rent
          </p>
          <p className="font-normal text-gray-600">Vasudev Nagar, Nagpur</p>
          <div className="mt-3 border-t border-gray-300 pt-3 flex flex-col md:flex-row">
            <div className="flex-1">
              <p className="font-normal text-gray-600">Furnishing</p>
              <p className="font-semibold text-gray-700">Semi Furnished</p>
            </div>
            <div className="flex-1">
              <p className="font-normal text-gray-600">Built-up Area</p>
              <p className="font-semibold text-gray-700">250 sqft</p>
            </div>
            <div className="flex-1">
              <p className="font-normal text-gray-600">Bathroom</p>
              <p className="font-semibold text-gray-700">1</p>
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-500">
          Suited for individuals desiring a comfortable, fully furnished living space with close proximity to amenities.
          </div>
          <div className="flex justify-end">
            <button className="bg-white text-blue-500 px-4 py-2 border border-blue-500 rounded mt-3 hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Owner Contact
            </button>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="max-w-[800px] border md:m-auto md:mt-10 p-5 shadow-2xl m-5 flex flex-col md:flex-row mb-10 rounded-2xl">
        <div className="order-2 md:order-1">
          <img
            src={house6}
            className="md:h-500px rounded-xl md:w-56 md:h-auto m-auto"
          />
        </div>
        <div className="ml-3 flex-grow order-2 md:order-2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            &#8377; 5000
          </h5>
          <p className="text-xl font-semibold text-gray-700">
            Independent Room for rent
          </p>
          <p className="font-normal text-gray-600">Bansi nagar, Nagpur</p>
          <div className="mt-3 border-t border-gray-300 pt-3 flex flex-col md:flex-row">
            <div className="flex-1">
              <p className="font-normal text-gray-600">Furnishing</p>
              <p className="font-semibold text-gray-700">Semi Furnished</p>
            </div>
            <div className="flex-1">
              <p className="font-normal text-gray-600">Built-up Area</p>
              <p className="font-semibold text-gray-700">400 sqft</p>
            </div>
            <div className="flex-1">
              <p className="font-normal text-gray-600">Bathroom</p>
              <p className="font-semibold text-gray-700">1</p>
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-500">
          Ideal for those seeking a serene, fully furnished living environment with convenient access to nearby amenities.
          </div>
          <div className="flex justify-end">
            <button className="bg-white text-blue-500 px-4 py-2 border border-blue-500 rounded mt-3 hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Owner Contact
            </button>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};
