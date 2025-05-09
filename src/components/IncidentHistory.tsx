
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { format } from 'date-fns';
import { ar, enUS } from 'date-fns/locale';
import { BrainCircuit, FileVideo } from 'lucide-react';

const IncidentHistory: React.FC = () => {
  const { language, translations, match } = useAppContext();
  
  const formatTime = (date: Date) => {
    return format(date, 'HH:mm:ss', { locale: language === 'ar' ? ar : enUS });
  };
  
  return (
    <Card className="p-4 bg-black bg-opacity-30 border-0">
      <h2 className="text-xl font-semibold mb-4">{translations.incidentHistory[language]}</h2>
      
      {match.incidents.length > 0 ? (
        <ScrollArea className="h-64">
          <div className="space-y-3">
            {match.incidents.map(incident => (
              <div key={incident.id} className="bg-black bg-opacity-40 rounded-lg p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{incident.player.name}</span>
                  <span className="text-sm text-gray-400">{formatTime(incident.timestamp)}</span>
                </div>
                
                <div className="flex items-center">
                  <div 
                    className={`w-4 h-6 mr-2 rounded-sm ${
                      incident.cardType === 'yellow' ? 'bg-referee-yellow' : 'bg-referee-red'
                    }`}
                  />
                  <span className="text-sm">
                    {incident.cardType === 'yellow' 
                      ? translations.yellowCard[language] 
                      : translations.redCard[language]}
                  </span>
                </div>
                
                {incident.reason && (
                  <p className="mt-2 text-sm text-gray-300">{incident.reason}</p>
                )}
                
                {/* AI Analysis and Video Evidence Information */}
                {incident.aiAnalysis && (
                  <div className="mt-3 p-2 bg-referee-blue bg-opacity-40 rounded-md text-xs">
                    <div className="flex items-center mb-1">
                      <BrainCircuit size={14} className="mr-1 text-referee-yellow" />
                      <span className="font-medium">{translations.aiAnalysis[language]}</span>
                    </div>
                    <p className="text-gray-300">{incident.aiAnalysis}</p>
                  </div>
                )}
                
                {incident.videoEvidence && (
                  <div className="mt-2 flex items-center text-xs text-referee-yellow">
                    <FileVideo size={14} className="mr-1" />
                    <span>
                      {language === 'ar' ? 'عرض الفيديو' : 'View Video'}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      ) : (
        <div className="h-32 flex items-center justify-center text-gray-500">
          {translations.noIncidents[language]}
        </div>
      )}
    </Card>
  );
};

export default IncidentHistory;
