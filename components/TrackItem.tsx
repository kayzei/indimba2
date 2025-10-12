
import React from 'react';
import Icon from './Icon';

interface TrackItemProps {
  rank?: number;
  title: string;
  artist: string;
  details: string;
}

const TrackItem: React.FC<TrackItemProps> = ({ rank, title, artist, details }) => {
  const handleDownload = () => {
    alert('Offline mode and downloads coming soon!');
  };

  return (
    <li className="flex justify-between items-center py-3 px-2 rounded-md hover:bg-white/5 transition-colors duration-200 group">
      <div className="flex items-center gap-4">
        {rank && <span className="text-sm text-gray-400 font-mono w-6 text-center">{rank}</span>}
        <div className="w-10 h-10 bg-[#282828] rounded-md flex items-center justify-center">
            <Icon name="play" className="w-5 h-5 text-gray-400 group-hover:text-white" />
        </div>
        <div>
          <p className="font-medium text-white">{title}</p>
          <p className="text-xs text-gray-400">{artist}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs text-gray-500 hidden md:block">{details}</span>
        <button onClick={handleDownload} title="Download" className="text-gray-500 hover:text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
          <Icon name="download" className="w-5 h-5" />
        </button>
      </div>
    </li>
  );
};

export default TrackItem;
