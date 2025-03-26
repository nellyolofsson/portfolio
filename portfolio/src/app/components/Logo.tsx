import { ReactTyped } from "react-typed";

export default function Logo() {
    return (
      <div className="relative w-full h-screen bg-center" style={{  backgroundPosition: "center", backgroundAttachment: "fixed" }}>
        {/* Gradientöverlägg för att tona bilden */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
  
        {/* Text ovanpå bilden */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-sans text-center">
          <h1 className="text-6xl mb-4">Nelly Olofsson</h1>
          <p className="text-2xl">Web Developer | Frontend & Backend</p>
       
          <ReactTyped
                strings={[
                  "I'm a Fullstack Developer.",
                  "I build modern web applications.",
                  "I create seamless digital experiences.",
                  "I design sleek user interfaces.",
                  "I develop robust backend systems."
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="text-2xl text-white mt-4"
              /> 
              </div>
      </div>
    );
  }
  