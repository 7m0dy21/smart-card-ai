
export type Language = 'ar' | 'en';

export type CardType = 'yellow' | 'red' | null;

export interface Player {
  id: string;
  name: string;
  jerseyNumber: number;
  team: string;
  position?: string;
  image?: string;
}

export interface Team {
  id: string;
  name: string;
  logo?: string;
  players: Player[];
}

export interface CardIncident {
  id: string;
  timestamp: Date;
  player: Player;
  cardType: CardType;
  reason?: string;
  imageCapture?: string;
}

export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  date: Date;
  venue: string;
  competition?: string;
  incidents: CardIncident[];
  status: 'upcoming' | 'ongoing' | 'completed';
  score?: {
    homeScore: number;
    awayScore: number;
  };
}
