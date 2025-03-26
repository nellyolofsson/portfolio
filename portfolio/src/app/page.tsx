"use client"; // För smooth scrolling

import { useEffect } from "react";
import Project from "./components/Project";
import Logo from "./components/Logo";


export default function Home() {
  useEffect(() => {
    const handleNavClick = (event: any) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    };

    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", handleNavClick);
    });

    return () => {
      document.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("click", handleNavClick);
      });
    };
  }, []);

  return (
    <main className="relative min-h-screen text-white bg-white">
   
      <Logo />



      {/* 🔹 Projekt-sektionen */}
      <section id="projects" className="h-screen flex flex-col items-center justify-center p-10 bg-white">
        <Project />
      </section>

      {/* 🔹 Kontakt-sektionen */}
      <section id="contact" className="h-screen flex flex-col items-center justify-center p-10 bg-white">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="text-lg mt-4 text-gray-300">
          Mejla mig på <a href="mailto:dinemail@example.com" className="text-blue-400">dinemail@example.com</a>
        </p>
      </section>

      {/* 🔹 Om-sektionen */ }
      <section id="about" className="h-screen flex flex-col items-center justify-center p-10 bg-white">
        <h2 className="text-4xl font-bold">About me</h2>
        <p className="text-lg mt-4 text-gray-300">
          Hej! Jag är en webbutvecklare som älskar att skapa snygga och användarvänliga webbplatser. 
          Jag har erfarenhet av att arbeta med moderna tekniker som React, Next.js, Tailwind CSS och mycket mer.
        </p>  
      </section>
    </main>
  );
}
