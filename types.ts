
export interface Playlist {
  id: number;
  title: string;
  desc: string;
  tracks: number;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  region: string;
  length: string;
  rank: number;
}

export interface Recommendation {
  songTitle: string;
  artist: string;
}
