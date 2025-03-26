"use client"; // För smooth scrolling
import Project from "./components/Project";
import Logo from "./components/Logo";
import Touch from "./components/Touch";
import About from "./components/About";
export default function Home() {


  return (
    <main className="relative min-h-screen text-white bg-white">
      <Logo />

      {/* 🔹 Projekt-sektionen */}
      <section  id="projects" className="h-screen flex flex-col items-center justify-center p-10 bg-white">
        <Project />
      </section>

      {/* 🔹 Kontakt-sektionen */}
      <section style={{ backgroundColor: '#f6f6e9' }} id="contact" className="h-screen flex flex-col items-center justify-center p-10 bg-white">
        <Touch />
      </section>

      {/* 🔹 Om-sektionen */}
      <section id="about" className="h-screen flex flex-col items-center justify-center p-10 bg-white">
        <About />
      </section>
    </main>
  );
}
