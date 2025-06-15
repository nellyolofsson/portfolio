import Image from "next/image";


export default function Projects() {
    const projects = [
      {
        title: "Summer Project",
        description: "An IoT project where I measure plant health by analyzing humidity, temperature, light and soil moisture." ,
        img: "/ny.jpg",
        github: "https://github.com/nellyolofsson/SummerProject2024"
      },
      {
        title: "Litterplatform",
        description: "A collaborative project I built with a classmate – a platform for sharing lists.",
        img: "/",
        github: "https://github.com/nellyolofsson/litter"
      },
      {
        title: "Portfolio",
        description: "My own portfolio, built with Next.js and Tailwind CSS.",
        img: "/portfolio.png",
        github: "https://github.com/nellyolofsson/portfolio"
      },
      {
        title: "Netflix",
        description: "Netflix Data Visualization 2021, A project where I visualized Netflix data from 2021.",
        img: "/FlixFlow.png",
        github: "https://github.com/nellyolofsson/netflix"
      }
    ];
  
    return (
      <div className="min-h-screen font-sans p-10">
        <h2 className="text-4xl text-black text-center mb-10">Some of my latest work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative w-full h-56">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
        
              />
              </div>
              <div className="p-4">
                <h3 className="text-xl text-black font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  