
import React from 'react';
import Icon from './Icon';

interface VideoPlayerProps {
  minimized: boolean;
  onMinimizeToggle: () => void;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ minimized, onMinimizeToggle, onClose }) => {
  const containerClasses = minimized
    ? 'bottom-24 md:bottom-4 right-4 w-64 h-36'
    : 'bottom-24 right-4 w-full max-w-lg h-72 md:bottom-8 md:right-8 md:w-96 md:h-56';

  return (
    <div className={`fixed ${containerClasses} bg-black/90 rounded-xl shadow-2xl border border-white/10 flex flex-col transition-all duration-300 z-50`}>
      <div className="flex items-center justify-between p-2 bg-white/10 rounded-t-xl cursor-move">
        <span className="text-sm font-medium text-white">Indimba Video</span>
        <div className="flex gap-2">
          <button className="p-1 text-white/70 hover:text-white hover:bg-white/20 rounded" onClick={onMinimizeToggle} title={minimized ? 'Expand' : 'Minimize'}>
            <Icon name={minimized ? 'expand' : 'minimize'} className="w-4 h-4" />
          </button>
          <button className="p-1 text-white/70 hover:text-white hover:bg-red-600/50 rounded" onClick={onClose} title="Close">
            <Icon name="close" className="w-4 h-4" />
          </button>
        </div>
      </div>
      {!minimized && (
        <iframe 
          className="flex-1 rounded-b-xl" 
          src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&mute=1" 
          title="YouTube stream" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayer;
