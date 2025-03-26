import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // 🔹 Ikon för LinkedIn
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-5 bg-black text-white backdrop-blur-md flex justify-between items-center z-10 shadow-lg">
      
      {/* 🔹 Vänstra hörnet - Länkar */}
      <div className="space-x-6 flex items-center font-sans">
        <Link href="#projects" className="text-lg font-semibold hover:text-gray-300 transition-all duration-300">Work</Link>
        <Link href="#about" className="text-lg font-semibold hover:text-gray-300 transition-all duration-300">About</Link>
        <Link href="#contact" className="text-lg font-semibold hover:text-gray-300 transition-all duration-300">Get in touch</Link>
      </div>

      {/* 🔹 Centrera namnet */}
      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-s font tracking-wide text-white font-sans">
        Hey there! 👋
      </h1>

      {/* 🔹 Högra hörnet - LinkedIn & GitHub */}
      <div className="flex space-x-6">
        <a 
          href="https://www.linkedin.com/in/ditt-linkedin" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-all duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a 
          href="https://github.com/nellyolofsson" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-all duration-300"
        >
          <FaGithub size={24} />
        </a>
      </div>

    </nav>
  );
}
