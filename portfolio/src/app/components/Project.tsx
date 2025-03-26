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
        img: "litter.png",
        github: "https://github.com/nellyolofsson/litter"
      },
      {
        title: "Todo App",
        description: "En enkel men kraftfull todo-app med React och Redux.",
        img: "/ny.jpg",
        github: "https://github.com/nellyolofsson/api"
      }
    ];
  
    return (
      <div className="min-h-screen font-sans p-10">
        <h2 className="text-4xl text-black text-center mb-10">Some of my latest work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={project.img} alt={project.title} className="w-full h-56 object-contain" />
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
  