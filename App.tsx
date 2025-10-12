
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import PlaylistCard from './components/PlaylistCard';
import TrackItem from './components/TrackItem';
import NowPlayingBar from './components/NowPlayingBar';
import VideoPlayer from './components/VideoPlayer';
import RecommendationCard from './components/RecommendationCard';
import Icon from './components/Icon';
import { getMusicRecommendations } from './services/geminiService';
import type { Recommendation } from './types';
import { PLAYLISTS, TRENDING_TRACKS, GLOBAL_CHART, GENRES } from './constants';

export default function App() {
  const [showVideo, setShowVideo] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [recoLoading, setRecoLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [recoError, setRecoError] = useState<string | null>(null);

  const handleGenreClick = useCallback(async (genre: string) => {
    if (selectedGenre === genre) {
        // Optional: re-fetch if clicked again
        return;
    }
    setSelectedGenre(genre);
    setRecoLoading(true);
    setRecommendations([]);
    setRecoError(null);
    try {
      const results = await getMusicRecommendations(genre);
      if (results.length === 0) {
        setRecoError("Couldn't find recommendations for this genre. Please try another.");
      } else {
        setRecommendations(results);
      }
    } catch (error) {
      console.error(error);
      setRecoError("An error occurred while fetching recommendations.");
    } finally {
      setRecoLoading(false);
    }
  }, [selectedGenre]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] via-[#181818] to-[#000000] text-gray-100 font-sans p-4 md:p-6 pb-32">
      <div className="max-w-7xl mx-auto">
        <Header loggedIn={loggedIn} onLoginToggle={() => setLoggedIn(!loggedIn)} />

        <main>
          {/* Search */}
          <div className="relative mb-8 max-w-lg">
            <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              placeholder="Search for songs, artists, or playlists..." 
              className="w-full pl-12 pr-4 py-3 rounded-full bg-[#242424] border border-transparent focus:outline-none focus:border-green-500 focus:bg-[#2a2a2a] text-sm"
            />
          </div>

          {/* Featured Playlists */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">Featured Playlists</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {PLAYLISTS.map(p => <PlaylistCard key={p.id} playlist={p} />)}
            </div>
          </section>

          {/* Trending & Global Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Trending Now</h2>
              <ul className="space-y-1">
                {TRENDING_TRACKS.map(t => (
                  <TrackItem key={t.id} title={t.title} artist={t.artist} details={`${t.region} • ${t.length}`} />
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Global Top 5</h2>
              <ul className="space-y-1">
                {GLOBAL_CHART.map(t => (
                  <TrackItem key={t.id} rank={t.rank} title={t.title} artist={t.artist} details="Global Chart" />
                ))}
              </ul>
            </section>
          </div>

          {/* AI-Powered Discovery */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">AI-Powered Discovery</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {GENRES.map((g) => (
                <button 
                  key={g}
                  onClick={() => handleGenreClick(g)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedGenre === g ? 'bg-green-500 text-black' : 'bg-[#242424] hover:bg-[#2a2a2a]'}`}
                >
                  {g}
                </button>
              ))}
            </div>
            {recoLoading && (
              <div className="flex items-center justify-center h-32 text-gray-400">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
                <p className="ml-3">Discovering new music for {selectedGenre}...</p>
              </div>
            )}
            {recoError && <p className="text-center text-red-400 p-4 bg-red-900/20 rounded-lg">{recoError}</p>}
            {!recoLoading && recommendations.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {recommendations.map((rec, i) => <RecommendationCard key={i} recommendation={rec} />)}
              </div>
            )}
          </section>

          {/* Upload Section */}
          <section className="mb-10 p-6 bg-[#181818] rounded-xl flex items-center justify-between">
            <div>
                <h3 className="text-lg font-bold text-white mb-1">Upload Your Music</h3>
                <p className="text-sm text-gray-400">
                {loggedIn ? "Submit your music (MP3/WAV) to reach listeners globally." : "Login is required to upload tracks and share your sound."}
                </p>
            </div>
            {loggedIn ? (
                <div className="flex items-center gap-3">
                    <label className="cursor-pointer px-4 py-2 bg-[#242424] text-white rounded-full font-medium hover:bg-[#2a2a2a] transition-colors text-sm">
                        Choose File
                        <input type="file" className="hidden" />
                    </label>
                    <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-black rounded-full font-bold hover:bg-green-400 transition-transform hover:scale-105 text-sm">
                      <Icon name="upload" className="w-5 h-5" />
                      Upload
                    </button>
                </div>
            ) : (
                <button onClick={() => setLoggedIn(true)} className="px-5 py-2 rounded-full bg-green-500 text-black font-bold text-sm hover:bg-green-400 transition-transform hover:scale-105">
                    Login to Upload
                </button>
            )}
          </section>
        </main>
      </div>

      <NowPlayingBar onShowVideo={() => setShowVideo(true)} />

      {showVideo && (
        <VideoPlayer 
          minimized={minimized}
          onMinimizeToggle={() => setMinimized(!minimized)}
          onClose={() => setShowVideo(false)}
        />
      )}
    </div>
  );
}
