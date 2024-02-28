import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Shiwani Shah</h3>
        <p className="text-lg font-normal text-gray-400">
          React Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am acurrently final year Computer Engineering student at Thapathali Campus. 
        I am really passionate towards coding and learning something new everyday.
          Join me on linkedin !
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">9810263030</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">shahshiwani70@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://github.com/cwane" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/shiwani.shah.986" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/ShiwaniShah8" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/shiwani-shah-246ab4205/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft