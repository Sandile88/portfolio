"use client"
import React, { useRef, useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
  


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!formRef.current) {
          console.error('Form reference is not available');
          setSubmitStatus('An error occurred. Please try again.');
          return;
        }
    
        setIsSubmitting(true);
        setSubmitStatus('');
    
        const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
        const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
        const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;
        console.log('Service ID:', serviceId, 'Template ID:', templateId, 'Public Key:', publicKey);
    
    
        if (!serviceId || !templateId || !publicKey) {
          console.error('EmailJS environment variables are not properly configured');
          setSubmitStatus('Configuration error. Please contact support.');
          setIsSubmitting(false);
          return;
        }
    
        try {
          const result = await emailjs.sendForm(
            serviceId,
            templateId,
            formRef.current,
            publicKey
          );
    
          if (result.text === 'OK') {
            setSubmitStatus('Message sent successfully!');
            formRef.current.reset();
          } else {
            setSubmitStatus('Failed to send message. Please try again.');
          }
        } catch (error) {
          setSubmitStatus('An error occurred. Please try again later.');
          console.error('EmailJS Error:', error);
        } finally {
          setIsSubmitting(false);
        }
      };

    return (
        <section id="contact" className="min-h-screen py-20 bg-amber-50 sm:py-24 lg:py-32">
            <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-neutral-800 sm:text-4xl lg:text-5xl mb-6">
                        <span className="relative inline-block">
                            <span className="absolute inline-block w-full h-2 bg-amber-200 bottom-1.5"></span>
                            <span className="relative">{`Questions or Ideas?`}</span>
                        </span>
                    </h2>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Contact Info */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="space-y-6 text-center lg:text-left">
                            <h3 className="text-2xl font-semibold text-amber-700">
                                {`Let's chat`}
                            </h3>
                            <p className="text-lg text-neutral-600">
                               {` If you have any inquiries or wish to discuss a project, 
                                feel free to reach out. I'm always excited to collaborate 
                                on new and interesting projects.`}
                            </p>
                        </div>

                        {/* Email Section */}
                        <div className="flex flex-col items-center lg:items-start space-y-4">
                            <div className="flex items-center group p-4 bg-white rounded-xl transition-all duration-200">
                                <div className="bg-amber-100 h-12 w-12 rounded-full flex items-center justify-center shrink-0">
                                    <FaEnvelope className="text-amber-700 w-5 h-5" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm text-neutral-500">Mail me at</p>
                                    <a 
                                        href="mailto:sandilep.mremi@gmail.com" 
                                        className="text-amber-700 font-medium hover:text-amber-800 transition-colors"
                                    >
                                        {`sandilep.mremi@gmail.com`}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* contact form */}
                    <div className="order-1 lg:order-2">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl">
                            <div className="space-y-4">
                                <input 
                                    type="text"
                                    name="user_name"
                                    placeholder="Full Name"
                                    className="w-full rounded-lg py-3 px-4 bg-white border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200"
                                />
                                <input 
                                    type="email"
                                    name="user_email"
                                    placeholder="Email Address"
                                    className="w-full rounded-lg py-3 px-4 bg-white border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200"
                                />
                                <input 
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    className="w-full rounded-lg py-3 px-4 bg-white border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message" 
                                    rows={6}
                                    className="w-full rounded-lg py-3 px-4 bg-white border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 resize-none"
                                />
                            </div>

                            {submitStatus && (
                            <div 
                                className="p-2 w-full text-center"
                            >
                                <p className={`text-sm ${submitStatus.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                                {submitStatus}
                                </p>
                            </div>
                            )}                            
                            <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-amber-700 rounded-full hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 duration-200 transition-colors outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer"
                        >
                            <span>
                            {isSubmitting ? 'Sending...' : 'Send'}

                            </span>
                            {/* Send Message */}
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16" 
                                height="16" 
                                fill="currentColor" 
                                className="shrink-0" 
                                viewBox="0 0 548.244 548.244"
                            >
                                <path 
                                    fillRule="evenodd" 
                                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" 
                                    clipRule="evenodd" 
                                />
                            </svg>
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;