"use client";
import { LiaDownloadSolid } from "react-icons/lia";
import { BsArrowRight } from "react-icons/bs";
import { FaEnvelope, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";


const Hero = () => {


  const profileImageUrl = "https://res.cloudinary.com/dyfc8prpv/image/upload/v1732467342/IMG_2782_1_eknrwx.jpg";

  return (
    <section id="about" className="min-h-screen pt-20 pb-12 bg-white sm:pt-24 lg:pt-32">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
            {`I am passionate about turning`}
            <span className="relative inline-block mx-2">
              <span className="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5"></span>
              <span className="relative">{`ideas into code!`}</span>
            </span>
          </h2>
          <a
            // type="button"
            href="https://github.com/Sandile88"
            className="group inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 utline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
            >
            Explore my Work
            <BsArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* left col*/}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="relative mb-4 overflow-hidden rounded-2xl">
            <Image
                src={profileImageUrl}
                alt="Sandile M'remi"
                width={100}
                height={100}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <h3 className="text-6xl font-medium text-gray-900 mb-2">
             {` Hello! I am Sandile M'remi.`}
            </h3>
          </div>


          {/* right cols */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-xl lg:text-2xl text-gray-700 mb-6">
             {` A full stack developer based in Johannesburg, South Africa.`}
            </p>


            <div className="flex flex-wrap gap-4 mb-6 justify-center lg:justify-start">
              <a
              href="/Sandile_M'remi_CV.pdf"
              download
                className="group inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 utline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
              >
                Download CV
                <LiaDownloadSolid className="ml-2 w-5 h-5" />
              </a>

              <Link href={''}
                className="group inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 utline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
                >
                Get in Touch
                <FaEnvelope className="ml-2 w-4 h-4" />
              </Link>
            </div>


            <div className="flex gap-6 text-4xl ">
              <a
                href="https://www.linkedin.com/in/sandile-m-remi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 transition-colors duration-200 utline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer "
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Sandile88"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 transition-colors duration-200 utline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
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