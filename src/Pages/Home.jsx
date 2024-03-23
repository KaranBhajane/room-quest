import React, { useState, useEffect } from "react";
import carsoul1 from "../assets/Carousel1.png";
import carsoul2 from "../assets/Carousel2.png";
import carsoul3 from "../assets/Carousel3.png";
import carsoul4 from "../assets/Carousel4.png";
import carsoul5 from "../assets/Carousel5.png";
import Privacy from "../assets/privacy.gif";
import Instant from "../assets/instant-move.gif";
import Deposit from "../assets/Deposit.gif";
import experience from "../assets/experience.gif";
import threecard from "../assets/threecardimg.png";
import Student from "../assets/Student(1).jpg";
import vector from "../assets/vector1.png";
import banner from "../assets/banner.png";

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
      {/* Carousel started */}
      <div
        id="default-carousel"
        className="relative h-[450px] overflow-hidden"
        data-carousel="slide"
      >
        <div className="relative h-full rounded-lg overflow-hidden">
          <div
            className="duration-700 ease-in-out absolute w-full flex"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <img
              src={carsoul1}
              className="w-full h-full object-cover"
              alt="..."
            />

            <img
              src={carsoul2}
              className="w-full h-full object-cover"
              alt="..."
            />
            <img
              src={carsoul3}
              className="w-full h-full object-cover"
              alt="..."
            />
            <img
              src={carsoul4}
              className="w-full h-full object-cover"
              alt="..."
            />
            <img
              src={carsoul5}
              className="w-full h-full object-cover"
              alt="..."
            />
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
          {/* Previous button icon */}
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextSlide}
        >
          {/* Next button icon */}
        </button>
      </div>

      {/* Carousel ends */}

      {/* middle section started */}
      <div className="md:flex m-auto">
        <div class="max-w-sm w-18 border-gray-200 md:m-14 flex flex-col items-center ml-4">
          <img src={experience} className="h-12 mb-2 " />
          <a href="#">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
              Seamless Experience
            </h5>
          </a>
          <p class=" font-normal text-gray-500 dark:text-gray-400 items-center">
            Our platform ensures a hassle-free transition with unmatched
            privacy, instant move-in options, and the lowest security deposit.
          </p>
        </div>

        <div class="max-w-sm w-18 border-gray-200 md:m-14 flex flex-col items-center ml-4">
          <img src={Privacy} className="h-12 mb-2 " />
          <a href="#">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
              Unmatched Privacy
            </h5>
          </a>
          <p class=" font-normal text-gray-500 dark:text-gray-400 items-center">
            Enjoy unparalleled privacy in our thoughtfully designed
            accommodations, ideal for studying or working from home.
          </p>
        </div>

        <div class="max-w-sm w-18 border-gray-200 md:m-14 flex flex-col items-center ml-4">
          <img src={Instant} className="h-12 mb-2 " />
          <a href="#">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
              Instant Move-In
            </h5>
          </a>
          <p class=" font-normal text-gray-500 dark:text-gray-400 items-center">
            Move into your new home instantly, with a streamlined process that
            saves you time and hassle.
          </p>
        </div>

        <div class="max-w-sm w-18 border-gray-200 md:m-14 flex flex-col items-center ml-4">
          <img src={Deposit} className="h-12 mb-2  " />
          <a href="#">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
              Lowest Deposit
            </h5>
          </a>
          <p class="font-normal text-gray-500 dark:text-gray-400 items-center">
            Benefit from the lowest security deposit options, ensuring
            affordable living with peace of mind.
          </p>
        </div>
      </div>

      {/*  */}

      <div
        href="#"
        class="flex flex-col items-center rounded-lg md:flex-row  hover:bg-gray-100  md:ml-10 md:mb-10"
      >
        <div>
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-96 md:w-full md:rounded-none mt-12"
            src={Student}
            alt=""
          />
        </div>
        <div class="flex flex-col justify-between p-4 leading-normal md:ml-14">
          <div className="flex flex-col lg:flex-row justify-center items-center py-12">
            <div className="max-w-4xl mx-auto px-4 md:w-full">
              <div className="flex flex-wrap justify-around mb-9 ">
                <div className="text-center w-full md:w-1/2 lg:w-1/4 p-4">
                  <div className="text-4xl font-bold">2,00,000+</div>
                  <div className="text-gray-500 mt-4">
                    <pre>Happy customers </pre>
                  </div>
                </div>
                <div className="text-center w-full md:w-1/2 lg:w-1/4 p-4">
                  <div className="text-4xl font-bold">1,00,000+</div>
                  <div className="text-gray-500 mt-4">
                    <pre>Houses across India</pre>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-around">
                <div className="text-center w-full md:w-1/2 lg:w-1/4 p-4">
                  <div className="text-4xl font-bold">9+</div>
                  <div className="text-gray-500 mt-4">
                    <pre>Cities in India</pre>
                  </div>
                </div>
                <div className="text-center w-full md:w-1/2 lg:w-1/4 p-4">
                  <div className="text-4xl font-bold">₹38+</div>
                  <div className="text-gray-500 mt-4">
                    <pre>Savings made on brokerage</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <a
        href="#"
        class="flex flex-col items-center shadow md:flex-row md:w-[100%]"
      >
        <div class="flex flex-col justify-between p-4 leading-normal md:ml-8">
          <h5 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-2xl mb-7">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <button className="bg-gray-900 border-gray-200 dark:bg-gray-900 text-white w-fit p-3 rounded-3xl m-auto">
            <span className="hover:text-blue-700">Explore Now!</span>
          </button>
        </div>
        <img
          class="object-cover w-full md:w-[500px] md:ml-14  h-96 md:h-auto md:h-96 md:rounded-none"
          src={vector}
          alt=""
        />
      </a>
      {/*  */}
      <div>
        <img src={banner} className="md:h-[600px] m-auto mt-14 rounded-3xl" />
      </div>

      {/* .. */}

      <div
        href="#"
        class="flex flex-col items-center shadow md:flex-row md:h-[100%]"
      >
        <div class="flex flex-col justify-between p-4 leading-normal md:ml-8">
          <h5 class="mb-2 md:text-6xl text-4xl text-center font-bold tracking-tight text-gray-900 mb-6 mt-10">
            Find Your Best Accommodation
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 md:text-2xl  mb-7 text-center">
            Discover hassle-free room finding for students and employees.
          </p>
          <button className="bg-gray-900 border-gray-200 dark:bg-gray-900 text-white w-fit p-3 rounded-3xl m-auto">
            <span className="hover:text-blue-700">Know More!</span>
          </button>
        </div>
        <img
          class=" w-full md:w-[500px] md:ml-9  h-96 md:h-[500px] md:mr-11 md:rounded-none md:mt-14"
          src={threecard}
          alt=""
        />
      </div>
      {/* .. */}

      {/* reviews starts */}

      <h1 className="text-center mb-7 mt-10 font-bold text-3xl">Reviews!!</h1>
      <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-white ">
        <figure class="flex flex-col items-center justify-center p-4  text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 ">
              Very easy this was to integrate
            </h3>
            <p class="my-4">
              If you care for your time, I hands down would go with this."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center ">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-gray-950 text-left rtl:text-right ms-3">
              <div>Bonnie Green</div>
              <div class="text-sm text-gray-500 dark:text-gray-400 ">
                Developer at Open AI
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 ">
              Solid foundation for any project
            </h3>
            <p class="my-4">
              Designing with Figma components that can be easily translated to
              the utility classes of Tailwind CSS is a huge timesaver!"
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center ">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
              <div>Roberta Casas</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Lead designer at Dropbox
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 ">
              Mindblowing workflow
            </h3>
            <p class="my-4">
              Aesthetically, the well designed components are beautiful and will
              undoubtedly level up your next application."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center ">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
              <div>Jese Leos</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Software Engineer at Facebook
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 ">
              Efficient Collaborating
            </h3>
            <p class="my-4">
              You have many examples that can be used to create a fast prototype
              for your team."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center ">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
              <div>Joseph McFall</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                CTO at Google
              </div>
            </div>
          </figcaption>
        </figure>
      </div>

      {/* reviews ends */}
      <div className="fixed bottom-0 right-0 m-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
          Find Perfect Accommodation
        </button>
      </div>

      {/* Footer starts */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 py-8">
            <div>
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="mt-4">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Brand Center</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Help Center</h3>
              <ul className="mt-4">
                <li>
                  <a href="#">Discord Server</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="mt-4">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Licensing</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Download</h3>
              <ul className="mt-4">
                <li>
                  <a href="#">iOS</a>
                </li>
                <li>
                  <a href="#">Android</a>
                </li>
                <li>
                  <a href="#">Windows</a>
                </li>
                <li>
                  <a href="#">MacOS</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-700 px-4 py-6 flex justify-center items-center">
            <p className="text-sm">© RoomQuest™ 2022</p>
            <div className="ml-6 space-x-4">
              <a href="#" className="text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* footer ends */}
    </div>
  );
};
