
import React from 'react';
import type { Playlist } from '../types';
import Icon from './Icon';

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  return (
    <article className="group p-4 bg-[#181818] hover:bg-[#282828] rounded-lg transition-all duration-300 cursor-pointer">
      <div className="relative w-full h-40 mb-4">
        <img 
          src={`https://picsum.photos/seed/${playlist.id}/300/300`} 
          alt={playlist.title} 
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300 shadow-lg">
          <Icon name="play" className="w-7 h-7 text-black" />
        </div>
      </div>
      <h3 className="font-bold text-white truncate">{playlist.title}</h3>
      <p className="text-sm text-gray-400 truncate">{playlist.desc}</p>
    </article>
  );
};

export default PlaylistCard;
