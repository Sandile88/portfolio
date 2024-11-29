"use client"

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-12 px-4 bg-gray-50">
            <div className="w-full max-w-5xl p-8 mx-auto grid sm:grid-cols-2 gap-12 items-start">
                
                {/* contact info */}
                <div className="space-y-8 mt-14">
                    <div className="space-y-2">
                        <h1 className="text-gray-900 text-4xl font-extrabold">
                            Questions or Ideas?
                        </h1>
                        <h2 className="text-2xl font-semibold text-amber-700">
                            {`Let's chat`}
                        </h2>
                        <p className="text-gray-600 mt-4">
                            {`If you have any inquiries or wish to discuss a project, feel free to reach out.`}
                        </p>
                    </div>

                    <div className="pt-4">
                        <h2 className="text-gray-900 text-lg font-bold mb-4">Email</h2>
                        <div className="flex items-center group hover:transform hover:scale-105 transition-transform duration-200">
                            <div className="bg-amber-100 h-12 w-12 rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    className="text-amber-600" viewBox="0 0 479.058 479.058">
                                    <path
                                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                    />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-500">Mail me at</p>
                                <a href="mailto:sandilep.mremi@gmail.com" className="text-amber-700 font-semibold hover:text-blue-700 transition-colors">
                                    {`sandilep.mremi@gmail.com`}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* contact form */}
                <form className="space-y-6 bg-gray-50 p-6 rounded-xl">
                    <div className="space-y-4">
                        <input 
                            type="text" 
                            placeholder="Full Name"
                            className="w-full rounded-lg py-3 px-4 bg-white border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200"
                        />
                        <input 
                            type="email" 
                            placeholder="Email Address"
                            className="w-full rounded-lg py-3 px-4 bg-white border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200"
                        />
                        <input 
                            type="text" 
                            placeholder="Subject"
                            className="w-full rounded-lg py-3 px-4 bg-white border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200"
                        />
                        <textarea 
                            placeholder="Message" 
                            rows={6}
                            className="w-full rounded-lg py-3 px-4 bg-white border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 resize-none"
                        />
                    </div>
                    
                    <button
                        type="button"
                        
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-amber-700 rounded-full hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 duration-200 transition-colors utline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            fill="currentColor" 
                            className="shrink-0" 
                            viewBox="0 0 548.244 548.244"
                        >
                            <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" />
                        </svg>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;