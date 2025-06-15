import Image from "next/image";

export default function Touch() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <h2 className="text-4xl text-black mb-4">Get In Touch</h2>
      <p className="text-center text-gray-700 max-w-xl mb-8">
        I’m always happy to connect! Feel free to reach out via email or phone, or download my CV below.  
        You can also scan the QR code to get my CV.
      </p>
      <div className="flex flex-col md:flex-row gap-10 items-center mb-8">
        <div className="relative w-40 h-40">
          {/* Lägg till QR-koden här */}
          <Image 
            src="/qr-code-4.png" // Path till din QR-kod i public-mappen
            alt="QR code to LinkedIn or CV"
            fill
            className="object-contain"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-xl text-black mb-2">📧 <a href="mailto:nossfolonelly@gmail.com" className="text-black hover:text-blue-500 underline hover:no-underline transition-colors">nossfolonelly@gmail.com</a></p>
          <p className="text-xl text-black mb-2">📞 <a href="tel:+46708654692" className="text-black hover:text-blue-500 underline hover:no-underline transition-colors">0708654692</a></p>
          <div className="flex gap-4 justify-center md:justify-start mt-4">
          </div>
        </div>
      </div>
      <a
        href="/nellyCV.pdf" 
        download
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Download CV
      </a>
    </div>
  );
}
