import Image from "next/image";

export default function About() {
    return (
      <section id="about" className="min-h-screen flex flex-col items-center justify-center p-10">
        <h2 className="text-4xl text-black mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profilbild */}
          <div className="relative w-64 h-64 mb-6 md:mb-0">
            <Image
              src="/nelson.jpg"
              alt="Nelly Olofsson"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-white"
            />
          </div>
  
         {/* Beskrivning */}
         <div className="text-xl text-gray-700 max-w-2xl text-center md:text-left">
          <p>
            Hi! I'm Nelly Olofsson, a passionate web developer with a love for both frontend and backend technologies. 
            My journey started with learning HTML, CSS, and JavaScript, and over time, I've developed expertise in modern frameworks such as React, Next.js.
          </p>
          <p className="mt-4">
            On the backend side, I've worked with technologies like Node.js, Express.js, and MongoDB to build robust APIs and handle databases effectively. 
          </p>
          <p className="mt-4">
            In addition to development, I have experience implementing CI/CD pipelines to automate testing, building, and deployment processes. For deployment and scalability, I have hands-on experience with Kubernetes (K8s).
          </p>
          <p className="mt-4">
            I'm always looking for new challenges and opportunities to grow as a developer and contribute to impactful projects. 
            I believe that great web development comes from the perfect blend of frontend and backend expertise, and I'm excited to continue improving my skills in both areas.
          </p>
        </div>
      </div>
      </section>
    );
  }
  