import React, { useState, useEffect } from "react";
import carsoul1 from "./../../assets/carsoul1.png";
import carsoul2 from "./../../assets/carsoul2.png";
import carsoul3 from "./../../assets/carsoul3.png";
import carsoul4 from "./../../assets/carsoul4.png";
import carsoul5 from "./../../assets/carsoul5.png";
import Privacy from "./../../assets/privacy.png";
import Instant from "./../../assets/Instant.png";
import Deposit from "./../../assets/deposit.png";
import Nest from "./../../assets/Nest.png";

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % 5);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + 5) % 5);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div>
      {/* nav started */}
      <nav className="bg-gray-900 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div>
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="src\assets\ROOMQUEST.png"
                className="h-8"
                alt="Flowbite Logo"
              />
            </a>
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-900">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Register
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Signup
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Help Section
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* navbar ends */}

      {/* Carousel started */}
      <div
        id="default-carousel"
        className="relative w-full "
        data-carousel="slide"
      >
        <div className="relative h-56  rounded-lg md:h-96  overflow-hidden">
          <div
            className="duration-700 ease-in-out absolute w-full flex"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <img src={carsoul1} className="w-full" alt="..." />
            <img src={carsoul2} className="w-full" alt="..." />
            <img src={carsoul3} className="w-full" alt="..." />
            <img src={carsoul4} className="w-full" alt="..." />
            <img src={carsoul5} className="w-full" alt="..." />
          </div>
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-black" : "bg-gray-300"
              }`}
              aria-current={index === currentSlide ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      {/* Carousel ends */}
      <div className="md:flex">
        <div class="max-w-sm w-18 border-gray-200 md:m-14">
          <img src={Privacy} className="h-12 mb-2" />
          <a href="#">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
              Unmatched Privacy
            </h5>
          </a>
          <p class=" font-normal text-gray-500 dark:text-gray-400">
            We're committed to protecting your privacy. Throughout your rental
            journey, we'll be there for you every step of the way.
          </p>
        </div>
        <div class="max-w-sm p-1  border-gray-200 md:m-14 ">
          <img src={Instant} className="h-12 mb-2" />
          <a href="#">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
              Instant Move-In
            </h5>
          </a>
          <p class=" font-normal text-gray-500 dark:text-gray-400">
            Say goodbye to lengthy waits. Find, finalize, and move into your
            dream home without any delay.
          </p>
        </div>
        <div class="max-w-sm p-1  border-gray-200 md:m-14 ">
          <img src={Deposit} className="h-12 mb-2" />
          <a href="#">
            <h5 class="md-2 text-xl font-semibold tracking-tight text-gray-900 ">
              Lowest Security Deposit
            </h5>
          </a>
          <p class=" font-normal text-gray-500 dark:text-gray-400">
            Ease rental stress by paying a minimal security deposit.
            Understanding financial challenges, we aim for convenience, ensuring
            a smoother rental journey for you.
          </p>
        </div>
        <div class="max-w-sm p-1  border-gray-200 md:m-14 ">
          <img src={Nest} className="h-12 mb-2" />
          <a href="#">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
              Nest’ n Network
            </h5>
          </a>
          <p class="font-normal text-gray-500 dark:text-gray-400">
            From shared spaces to curated events, we foster a space where you're
            not just renting a home but building the future.
          </p>
        </div>
      </div>
    </div>
  );
};
