import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const ProfileCard: React.FC = () => {
  return (
    <div className="relative z-10 w-full max-w-[400px] mx-auto p-6 rounded-2xl backdrop-blur-xl bg-white/10 shadow-2xl border border-white/20 transform transition-all duration-300 hover:translate-y-[-2px]">
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-lg animate-glow">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-2">John Doe</h1>
        <p className="text-purple-200 mb-4">Senior Software Engineer</p>
        
        <p className="text-gray-300 mb-6 text-sm">
          Crafting digital experiences with a passion for clean code and innovative solutions.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-3 rounded-lg bg-white/5 backdrop-blur-sm">
            <p className="text-purple-200 text-sm">Projects</p>
            <p className="text-white font-bold">50+</p>
          </div>
          <div className="p-3 rounded-lg bg-white/5 backdrop-blur-sm">
            <p className="text-purple-200 text-sm">Experience</p>
            <p className="text-white font-bold">8 Years</p>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <SocialIcon icon={<Github />} href="#" label="GitHub" />
          <SocialIcon icon={<Twitter />} href="#" label="Twitter" />
          <SocialIcon icon={<Linkedin />} href="#" label="LinkedIn" />
          <SocialIcon icon={<Mail />} href="#" label="Email" />
        </div>
      </div>
    </div>
  );
};

const SocialIcon: React.FC<{
  icon: React.ReactNode;
  href: string;
  label: string;
}> = ({ icon, href, label }) => (
  <a
    href={href}
    aria-label={label}
    className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors duration-300 text-white/80 hover:text-white"
  >
    {icon}
  </a>
);

export default ProfileCard;