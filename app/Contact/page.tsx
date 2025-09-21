import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const ContactComp = () => {
  const contactLinks = [
    {
      id: 1,
      name: 'GitHub',
      icon: <Github className="w-8 h-8" />,
      link: 'https://github.com/anuragbagri',
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:shadow-gray-500/25'
    },
    {
      id: 2,
      name: 'LinkedIn',
      icon: <Linkedin className="w-8 h-8" />,
      link: 'https://www.linkedin.com/in/anurag-bagri-476a33255/',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:shadow-blue-500/25'
    },
    {
      id: 3,
      name: 'Twitter',
      icon: <Twitter className="w-8 h-8" />,
      link: 'https://x.com/noob_anurag',
      color: 'from-sky-400 to-blue-500',
      hoverColor: 'hover:shadow-sky-500/25'
    }
  ];

  const emailAddress = "anurag123bagri@gmail.com";

  return (
    <div className="min-h-screen bg-black py-20 px-4 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Contact Heading */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Let's connect and collaborate! Reach out through any of these platforms.
          </p>
        </div>

        {/* Email Display */}
        <div className="mb-12">
          <div className="group relative flex items-center justify-center w-20 h-20 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 transition-all duration-300 ease-out hover:scale-125 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl hover:shadow-red-500/25 mx-auto">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
            
            {/* Icon */}
            <div className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
              <Mail className="w-8 h-8" />
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 opacity-10 blur-xl"></div>
            </div>
          </div>
          
          {/* Email Text */}
          <p className="text-gray-300 text-lg mt-4 font-medium">{emailAddress}</p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-8">
          {contactLinks.map((contact) => (
            <a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-center w-20 h-20 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 transition-all duration-300 ease-out hover:scale-125 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl ${contact.hoverColor}`}
              aria-label={contact.name}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
              
              {/* Icon */}
              <div className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
                {contact.icon}
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${contact.color} opacity-10 blur-xl`}></div>
              </div>

              {/* Tooltip */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-gray-900 text-white text-sm px-3 py-1 rounded-lg border border-gray-700">
                  {contact.name}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactComp;