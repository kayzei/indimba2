
import type { Playlist, Track } from './types';

export const PLAYLISTS: Playlist[] = [
  { id: 1, title: 'Zed Global Mix', desc: 'Blending Zambia’s heat with world beats', tracks: 35 },
  { id: 2, title: 'Kalindula Reimagined', desc: 'Classic sounds meet modern rhythms', tracks: 22 },
  { id: 3, title: 'Afro Fusion Lounge', desc: 'Groove to Africa’s finest and beyond', tracks: 40 },
  { id: 4, title: 'Top 50 Africa', desc: 'Pan-African chart toppers', tracks: 50 },
  { id: 5, title: 'Global Chill', desc: 'Lo-fi and soft blends for any vibe', tracks: 28 },
];

export const TRENDING_TRACKS: Omit<Track, 'rank'>[] = [
  { id: 't1', title: 'Chikondi', artist: 'Yo Maps', region: 'Zambia', length: '3:55' },
  { id: 't2', title: 'Calm Down', artist: 'Rema', region: 'Nigeria', length: '3:39' },
  { id: 't3', title: 'Water', artist: 'Tyla', region: 'South Africa', length: '3:20' },
  { id: 't4', title: 'Essence', artist: 'Wizkid ft. Tems', region: 'Nigeria', length: '4:02' },
];

export const GLOBAL_CHART: Omit<Track, 'region' | 'length'>[] = [
  { id: 'g1', rank: 1, title: 'Espresso', artist: 'Sabrina Carpenter' },
  { id: 'g2', rank: 2, title: 'Not Like Us', artist: 'Kendrick Lamar' },
  { id: 'g3', rank: 3, title: 'I Had Some Help', artist: 'Post Malone ft. Morgan Wallen' },
  { id: 'g4', rank: 4, title: 'A Bar Song (Tipsy)', artist: 'Shaboozey' },
  { id: 'g5', rank: 5, title: 'Million Dollar Baby', artist: 'Tommy Richman' },
];

export const GENRES: string[] = ['Zed Beats', 'Afrobeat', 'Kalindula', 'Pop', 'Hip-Hop', 'Jazz', 'Lo-Fi', 'Amapiano'];
