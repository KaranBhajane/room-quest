import React, { useState } from "react";
import bgimage from "../assets/loginlogoutbg.png";
import { useNavigate } from "react-router";

export const HomeRegistration = () => {
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [furnishing, setFurnishing] = useState("Semi Furnished");
  const [facilities, setFacilities] = useState([]);
  const [accommodationType, setAccommodationType] = useState("1BHK");

  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleOwnerNameChange = (event) => {
    setOwnerName(event.target.value);
  };

  const handleFurnishingChange = (event) => {
    setFurnishing(event.target.value);
  };

  const handleFacilitiesChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFacilities([...facilities, value]);
    } else {
      setFacilities(facilities.filter((facility) => facility !== value));
    }
  };

  const handleAccommodationTypeChange = (event) => {
    setAccommodationType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    // Add your logic here
  };

  return (
    <div className="overflow-hidden min-h-screen">
      <section className="relative pt-12 pb-12">
        <div className="absolute inset-0 min-h-screen">
          <img
            src={bgimage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center px-10 py-6 mx-auto md:h-screen lg:py-0 pt-[5rem]">
          <div className="w-full bg-white bg-opacity-50 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 relative">
            <div className="p-5 space-y-5 md:space-y-3 sm:p-7">
              <h1 className="text-xl text-center font-bold leading-tight mb-4 tracking-tight text-gray-900 md:text-2xl">
                Register Your Home
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Image Upload
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    id="image"
                    onChange={handleImageUpload}
                    className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      value={price}
                      onChange={handlePriceChange}
                      className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter price"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      value={location}
                      onChange={handleLocationChange}
                      className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter location"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="ownerName"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Owner Name
                    </label>
                    <input
                      type="text"
                      name="ownerName"
                      id="ownerName"
                      value={ownerName}
                      onChange={handleOwnerNameChange}
                      className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter owner name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Furnishing
                    </label>
                    <div className="mt-2">
                      <select
                        name="furnishing"
                        id="furnishing"
                        value={furnishing}
                        onChange={handleFurnishingChange}
                        className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="Fully Furnished">Fully Furnished</option>
                        <option value="Semi Furnished">Semi Furnished</option>
                        <option value="Not Furnished">Not Furnished</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-600">
                    Accommodation Type
                  </label>
                  <div>
                    <select
                      name="accommodationType"
                      id="accommodationType"
                      value={accommodationType}
                      onChange={handleAccommodationTypeChange}
                      className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="1BHK">1BHK</option>
                      <option value="2BHK">2BHK</option>
                      <option value="3BHK">3BHK</option>
                      <option value="4BHK">4BHK</option>
                      <option value="5BHK">5BHK</option>
                      <option value="6BHK">6BHK</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-600">
                    Facilities
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value="Wifi"
                        onChange={handleFacilitiesChange}
                        className="form-checkbox h-4 w-4 text-gray-600 focus:ring-primary-500 dark:focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">Wifi</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value="Parking"
                        onChange={handleFacilitiesChange}
                        className="form-checkbox h-4 w-4 text-gray-600 focus:ring-primary-500 dark:focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">Parking</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value="Gym"
                        onChange={handleFacilitiesChange}
                        className="form-checkbox h-4 w-4 text-gray-600 focus:ring-primary-500 dark:focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">Gym</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value="Swimming Pool"
                        onChange={handleFacilitiesChange}
                        className="form-checkbox h-4 w-4 text-gray-600 focus:ring-primary-500 dark:focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">
                        Swimming Pool
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value="Air Conditioning"
                        onChange={handleFacilitiesChange}
                        className="form-checkbox h-4 w-4 text-gray-600 focus:ring-primary-500 dark:focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">
                        Air Conditioning
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value="Laundry"
                        onChange={handleFacilitiesChange}
                        className="form-checkbox h-4 w-4 text-gray-600 focus:ring-primary-500 dark:focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">Laundry</span>
                    </label>
                    {/* Additional facility option */}
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value="Food Facility"
                        onChange={handleFacilitiesChange}
                        className="form-checkbox h-4 w-4 text-gray-600 focus:ring-primary-500 dark:focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">
                        Food Facility
                      </span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Register Your Home
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
