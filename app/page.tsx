import { Instagram, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">Guavi</h1>
      
      <div className="flex gap-6 mt-8">
        <a href="https://www.instagram.com/itsguavi/" className="text-white hover:text-gray-300 transition-colors">
          <Instagram size={20} />
        </a>
        <a href="mailto:itsguavi@gmail.com" className="text-white hover:text-gray-300 transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </main>
  );
}