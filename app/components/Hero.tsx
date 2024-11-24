"use client";
import { LiaDownloadSolid } from "react-icons/lia";
import { BsArrowRight } from "react-icons/bs";
import { FaEnvelope, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 pb-12 bg-white sm:pt-24 lg:pt-32">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* subheader sec */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
            {`I am passionate about turning`}
            <span className="relative inline-block mx-2">
              <span className="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5"></span>
              <span className="relative">{`ideas into code!`}</span>
            </span>
          </h2>
          <button
            type="button"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-colors duration-200 bg-gray-800 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Explore my Work
            <BsArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* left col*/}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="relative w-40 h-40 lg:w-48 lg:h-48 mb-4 overflow-hidden rounded-2xl">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/2/business-man.jpg"
                alt="Sandile M'remi"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
             {` Hello! I am Sandile M'remi.`}
            </h3>
          </div>


          {/* right cols */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-xl lg:text-2xl text-gray-700 mb-6">
             {` A full stack developer based in Johannesburg, South Africa.`}
            </p>


            <div className="flex flex-wrap gap-4 mb-6 justify-center lg:justify-start">
              <button
                type="button"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
              >
                Download CV
                <LiaDownloadSolid className="ml-2 w-5 h-5" />
              </button>

              <button
                type="button"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
              >
                Get in Touch
                <FaEnvelope className="ml-2 w-4 h-4" />
              </button>
            </div>


            <div className="flex gap-6 text-4xl">
              <a
                href="https://www.linkedin.com/in/sandile-m-remi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Sandile88"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <FaGithubSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;