import { LiaDownloadSolid } from "react-icons/lia";
import { BsArrowRight } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

 


const Hero = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                I am passionate about turning
                <span className="relative inline-block">
                    <span className="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5"></span>
                    <span className="relative"> ideas into code! </span>
                </span>
            </h2>
            <button type="button" className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Explore my Work
                    <span>
                        <BsArrowRight />
                    </span>
                   
                </button>
        </div>

        <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
            <div>
                <img className="w-full mx-auto sm:max-w-xs lg:rounded-2xl" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/2/business-man.jpg" alt="" />
                <h3 className="text-lg font-semibold text-gray-900 ">Hello! I am Sandile M'remi.</h3>

            </div>
            

            <div>
                {/* <h3 className="text-lg font-semibold text-gray-900">Hello! I am Sandile M'remi.</h3> */}
                <p>A full stack developer based in Johannesburg, South Africa.</p>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Download CV 
                    <span>
                        <LiaDownloadSolid />
                    </span>
                   
                </button>

                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get in Touch
                    <span>
                    <FaEnvelope />
                    </span>
                   
                </button>

                <div className="text-4xl grid grid-cols-1">


                <a href="www.linkedin.com/in/sandile-m-remi" className="">
                    <FaLinkedin />

                </a>

                <a href="https://github.com/Sandile88">
                    <FaGithubSquare />
                </a>
                </div>





                {/* <p className="mt-4 text-lg text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <p className="mt-4 text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <h3 className="mt-8 text-lg font-semibold text-gray-900">How do I do this without any investment?</h3>
                <p className="mt-4 text-lg text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
            </div>
        </div>
    </div>
</section>

    );
};

export default Hero;