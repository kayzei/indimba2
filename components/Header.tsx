
import React from 'react';
import Icon from './Icon';

interface HeaderProps {
  loggedIn: boolean;
  onLoginToggle: () => void;
}

const NavButton: React.FC<{ icon: string; label: string; active?: boolean }> = ({ icon, label, active = false }) => (
  <button className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-200 ${active ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
    <Icon name={icon} className="w-5 h-5" />
    <span className="font-medium text-sm">{label}</span>
  </button>
);

const Header: React.FC<HeaderProps> = ({ loggedIn, onLoginToggle }) => {
  return (
    <header className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-white rounded-full flex items-center justify-center text-lg font-extrabold text-white shadow-lg">♫</div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Indimba</h1>
          <p className="text-sm text-gray-400">Zambia’s Global Music Hub</p>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-2 p-1 bg-[#242424] rounded-full">
        <NavButton icon="home" label="Home" active />
        <NavButton icon="library" label="Library" />
        <NavButton icon="discover" label="Discover" />
      </nav>
      <div className="flex items-center gap-4">
        <NavButton icon="profile" label="Profile" />
        <button onClick={onLoginToggle} className="px-5 py-2 rounded-full bg-green-500 text-black font-bold text-sm hover:bg-green-400 transition-transform hover:scale-105">
          {loggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </header>
  );
};

export default Header;
