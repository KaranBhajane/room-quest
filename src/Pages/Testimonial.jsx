import React from "react";
import bgimage from "../assets/loginlogoutbg.png";
import { useNavigate } from "react-router";

export const Testimonial= () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTestimonial = {
      name: e.target.name.value,
      profession: e.target.profession.value,
      title: e.target.title.value,
      description: e.target.description.value,
      image: URL.createObjectURL(e.target.image.files[0]),
    };
    addTestimonial(newTestimonial);
    // Submit the testimonialData wherever you want, like sending it to a server
    console.log(testimonialData);
    navigate("/");
  };

  return (
    <div className="overflow-hidden h-screen">
      <section className="relative">
        <div className="absolute inset-0 h-screen">
          <img
            src={bgimage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 md:-mt-5 pt-[7rem] md:-pt-[7rem]">
          <div className="w-full bg-white bg-opacity-50 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 relative z-10">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Give Your reviews
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-white bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Image
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="image"
                      id="image"
                      placeholder="Enter Title"
                      className="bg-white bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:cursor-pointer"
                      required=""
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="profession"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Profession
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="profession"
                      id="profession"
                      placeholder="Enter Title"
                      className="bg-white bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Title
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Enter Title"
                      className="bg-white bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Description
                  </label>
                  <div className="relative">
                    <textarea
                      name="description"
                      id="description"
                      placeholder="Enter Description"
                      className="bg-white bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
