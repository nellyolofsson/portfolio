import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="text-center p-20">
        <h1 className="text-4xl font-bold">Hej! Jag är en webbutvecklare</h1>
        <p className="text-lg mt-4">Välkommen till min portfolio</p>
      </div>
    </div>
  );
}
