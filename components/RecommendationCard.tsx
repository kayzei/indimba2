
import React from 'react';
import type { Recommendation } from '../types';
import Icon from './Icon';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
  return (
    <div className="bg-[#282828] p-3 rounded-lg flex items-center gap-4 hover:bg-[#383838] transition-colors duration-200">
      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-400 rounded-md flex items-center justify-center shrink-0">
        <Icon name="discover" className="w-6 h-6 text-white" />
      </div>
      <div>
        <h4 className="font-semibold text-sm text-white truncate">{recommendation.songTitle}</h4>
        <p className="text-xs text-gray-400 truncate">{recommendation.artist}</p>
      </div>
    </div>
  );
};

export default RecommendationCard;
