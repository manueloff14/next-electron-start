import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.electronAPI) {
      // Enviar un mensaje al proceso principal
      window.electronAPI.enviarMensaje('Hola desde Next.js');

      // Recibir mensajes del proceso principal
      window.electronAPI.recibirMensaje((event, mensaje) => {
        console.log('Mensaje del proceso principal:', mensaje);
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold text-center">Bienvenido a Next.js con Electron :D</h1>
      <p className="text-center text-sm text-gray-400 w-1/2">Este es el proyecto inicial para crear una aplicación de escritorio con Next.js y Electron, por Manuel Cabrera, desde la ciudad de Cúcuta, Colombia. <span className="font-bold text-gray-200">A mis 16 años.</span></p>
      <ul className="flex gap-4 text-sm text-black font-bold">
        <li>
          <a href="https://github.com/manueloff14" className="flex items-center gap-2 bg-white rounded-full p-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0px_0px_10px_5px_rgba(100,100,100,0.5)]">
            <img src="/svg/github_icon.svg" alt="GitHub" className="w-4 h-4" />
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/manueloff14/" className="flex items-center gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full p-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0px_0px_10px_5px_rgba(255,182,193,0.6)]">
            <img src="/svg/instagram_icon.svg" alt="Instagram" className="w-4 h-4" />
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
}
