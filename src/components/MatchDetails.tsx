
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const MatchDetails: React.FC = () => {
  const { language, match } = useAppContext();
  
  return (
    <Card className="p-4 bg-black bg-opacity-30 border-0">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-400">
            {match.competition}
          </div>
          <div className="text-sm text-gray-400">
            {match.venue}
          </div>
        </div>
        
        <div className="flex justify-between items-center my-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
              {match.homeTeam.logo ? (
                <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="max-w-full max-h-full" />
              ) : (
                <span className="text-xl font-bold">{match.homeTeam.name.charAt(0)}</span>
              )}
            </div>
            <h3 className="mt-2 font-bold">{match.homeTeam.name}</h3>
          </div>
          
          <div className="text-center">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">{match.score?.homeScore || 0}</div>
              <Separator orientation="vertical" className="h-8 bg-gray-600" />
              <div className="text-2xl font-bold">{match.score?.awayScore || 0}</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
              {match.awayTeam.logo ? (
                <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="max-w-full max-h-full" />
              ) : (
                <span className="text-xl font-bold">{match.awayTeam.name.charAt(0)}</span>
              )}
            </div>
            <h3 className="mt-2 font-bold">{match.awayTeam.name}</h3>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="px-3 py-1 bg-referee-red rounded-full text-white text-sm">
            {language === 'ar' ? 'مباشر' : 'LIVE'}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MatchDetails;
