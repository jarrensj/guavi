import { Instagram, Mail, Music, Video, Calendar, Star } from 'lucide-react';

interface LinkCardProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  description?: string;
}

function LinkCard({ title, icon, href, description }: LinkCardProps) {
  return (
    <a 
      href={href}
      className="block w-full max-w-md mx-auto mb-4 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 hover:scale-105 transition-all duration-200 shadow-lg"
    >
      <div className="flex items-center gap-3">
        <div className="text-white">
          {icon}
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-white font-medium text-lg">{title}</h3>
          {description && (
            <p className="text-white/70 text-sm">{description}</p>
          )}
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  const links = [
    {
      title: "Latest Music",
      icon: <Music size={24} />,
      href: "/",
      description: "Stream my newest tracks"
    },
    {
      title: "Music Videos",
      icon: <Video size={24} />,
      href: "/",
      description: "Watch official music videos"
    },
    {
      title: "Tour Dates",
      icon: <Calendar size={24} />,
      href: "/",
      description: "See me live in concert"
    },
    {
      title: "Exclusive Content",
      icon: <Star size={24} />,
      href: "/",
      description: "Behind the scenes access"
    }
  ];

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center overflow-hidden">
            <div 
              className="w-20 h-20 rounded-full bg-center bg-cover"
              style={{ backgroundImage: "url('/Guavi.JPG')" }}
            />
          </div>
          <h1 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">Guavi</h1>
          <p className="text-white/80 mb-6">Artist • Producer • Designer</p>
          
          {/* Social Icons */}
          <div className="flex gap-4 justify-center mb-8">
            <a 
              href="https://www.instagram.com/itsguavi/" 
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="mailto:itsguavi@gmail.com" 
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Link Cards */}
        <div className="space-y-0">
          {links.map((link, index) => (
            <LinkCard
              key={index}
              title={link.title}
              icon={link.icon}
              href={link.href}
              description={link.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}