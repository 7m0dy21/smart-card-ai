
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Card } from '@/components/ui/card';
import { Scan, User } from 'lucide-react';
import { Player } from '../types';

const PlayerRecognition: React.FC = () => {
  const { 
    language, 
    translations,
    cameraActive,
    match,
    recognizedPlayer,
    setRecognizedPlayer
  } = useAppContext();

  // Mock function to simulate player recognition
  const recognizeRandomPlayer = () => {
    if (!cameraActive) return;
    
    const allPlayers = [
      ...match.homeTeam.players,
      ...match.awayTeam.players
    ];
    
    if (allPlayers.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * allPlayers.length);
    const player = allPlayers[randomIndex];
    
    setRecognizedPlayer(player);
  };
  
  const PlayerCard = ({ player }: { player: Player }) => {
    return (
      <div className="flex items-center p-3 bg-black bg-opacity-40 rounded-lg">
        <div className="bg-referee-blue rounded-full p-2 mr-3">
          <User size={24} />
        </div>
        <div>
          <h3 className="font-bold">{player.name}</h3>
          <div className="flex text-sm text-gray-300">
            <span className="mr-2">#{player.jerseyNumber}</span>
            <span>{player.team}</span>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <Card className="p-4 bg-black bg-opacity-30 border-0">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          {translations.playerRecognition[language]}
        </h2>
        
        <button 
          onClick={recognizeRandomPlayer}
          disabled={!cameraActive}
          className={`p-2 rounded-full ${
            cameraActive 
              ? 'bg-referee-yellow text-black hover:bg-yellow-600' 
              : 'bg-gray-700 text-gray-400'
          }`}
        >
          <Scan size={20} />
        </button>
      </div>
      
      {recognizedPlayer ? (
        <PlayerCard player={recognizedPlayer} />
      ) : (
        <div 
          onClick={cameraActive ? recognizeRandomPlayer : undefined}
          className={`
            h-20 flex items-center justify-center rounded-lg border-2 border-dashed 
            ${cameraActive ? 'border-referee-yellow cursor-pointer recognition-box' : 'border-gray-700'}
          `}
        >
          <div className="text-center text-sm text-gray-400">
            {cameraActive 
              ? translations.playerRecognition[language]
              : translations.activate[language] + ' ' + translations.camera[language].toLowerCase()
            }
          </div>
        </div>
      )}
    </Card>
  );
};

export default PlayerRecognition;
