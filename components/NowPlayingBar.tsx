
import React from 'react';
import Icon from './Icon';

interface NowPlayingBarProps {
  onShowVideo: () => void;
}

const NowPlayingBar: React.FC<NowPlayingBarProps> = ({ onShowVideo }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-[#121212] to-transparent z-40">
      <div className="bg-[#181818] border-t border-[#333] p-4 flex items-center justify-between mx-auto max-w-6xl rounded-t-lg">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-cover bg-center rounded-md" style={{backgroundImage: `url('https://picsum.photos/seed/t1/100/100')`}}></div>
          <div>
            <p className="font-semibold text-white">Chikondi</p>
            <p className="text-sm text-gray-400">Yo Maps</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4 text-white">
                <Icon name="play" className="w-10 h-10 p-2 rounded-full bg-green-500 text-black cursor-pointer hover:scale-105 transition-transform" />
            </div>
            {/* Progress Bar placeholder */}
            <div className="w-64 h-1 bg-gray-600 rounded-full">
                <div className="w-1/2 h-full bg-green-500 rounded-full"></div>
            </div>
        </div>

        <button 
          onClick={onShowVideo} 
          className="flex items-center gap-2 text-sm px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
        >
          <Icon name="video" className="w-5 h-5"/>
          <span>Video</span>
        </button>
      </div>
    </div>
  );
};

export default NowPlayingBar;
