
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { CardType } from '../types';
import { AlertTriangle, Check } from 'lucide-react';

const CardControls: React.FC = () => {
  const { 
    language, 
    translations, 
    selectedCardType,
    setSelectedCardType,
    recognizedPlayer,
    issueCard
  } = useAppContext();
  
  const [reason, setReason] = useState<string>('');

  const handleSelectCard = (cardType: CardType) => {
    setSelectedCardType(cardType === selectedCardType ? null : cardType);
  };
  
  const handleIssueCard = () => {
    if (recognizedPlayer && selectedCardType) {
      issueCard(recognizedPlayer, selectedCardType, reason);
      setReason('');
    }
  };
  
  return (
    <Card className="p-4 bg-black bg-opacity-30 border-0">
      <h2 className="text-xl font-semibold mb-4">{translations.issueCard[language]}</h2>
      
      <div className="flex gap-4 mb-4">
        <button
          className={`relative w-24 h-32 rounded-md overflow-hidden transition-all ${
            selectedCardType === 'yellow' ? 'ring-4 ring-white' : ''
          } card-yellow`}
          onClick={() => handleSelectCard('yellow')}
        >
          {selectedCardType === 'yellow' && (
            <div className="absolute top-2 right-2 bg-white rounded-full p-1">
              <Check size={16} className="text-referee-yellow" />
            </div>
          )}
        </button>
        
        <button
          className={`relative w-24 h-32 rounded-md overflow-hidden transition-all ${
            selectedCardType === 'red' ? 'ring-4 ring-white' : ''
          } card-red`}
          onClick={() => handleSelectCard('red')}
        >
          {selectedCardType === 'red' && (
            <div className="absolute top-2 right-2 bg-white rounded-full p-1">
              <Check size={16} className="text-referee-red" />
            </div>
          )}
        </button>
      </div>
      
      <Textarea
        placeholder={translations.enterReason[language]}
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        className="mb-4 bg-black bg-opacity-30 text-white resize-none h-20"
      />
      
      <Button 
        onClick={handleIssueCard}
        disabled={!recognizedPlayer || !selectedCardType}
        className={`w-full ${
          selectedCardType === 'yellow' 
            ? 'bg-referee-yellow text-black hover:bg-yellow-600' 
            : selectedCardType === 'red'
            ? 'bg-referee-red text-white hover:bg-red-700'
            : ''
        }`}
      >
        {translations.issueCard[language]}
      </Button>
      
      {!recognizedPlayer && (
        <div className="mt-4 text-amber-300 flex items-center justify-center p-2 bg-amber-900 bg-opacity-30 rounded-md">
          <AlertTriangle size={16} className="mr-2" />
          <span className="text-sm">{translations.playerRecognition[language]}</span>
        </div>
      )}
    </Card>
  );
};

export default CardControls;
