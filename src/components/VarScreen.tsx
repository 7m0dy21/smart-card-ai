
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Card } from '@/components/ui/card';
import { Tv, Play, PlayCircle } from 'lucide-react';
import { CardIncident } from '../types';

const VarScreen: React.FC = () => {
  const { language, translations, match, recognizedPlayer, selectedCardType } = useAppContext();
  
  // Get the most recent incident to display
  const recentIncident: CardIncident | undefined = match.incidents[0];
  
  return (
    <Card className="p-4 bg-black bg-opacity-30 border-0">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold flex items-center">
          <Tv className="mr-2" size={20} />
          {language === 'ar' ? 'شاشة الفار' : 'VAR Screen'}
        </h2>
      </div>
      
      <div className="bg-black rounded-lg overflow-hidden relative">
        {/* Mock video screen */}
        <div className="aspect-video bg-gradient-to-br from-referee-blue to-black flex items-center justify-center">
          {recentIncident && recentIncident.imageCapture ? (
            <img 
              src={recentIncident.imageCapture} 
              alt="Incident capture" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center opacity-70">
              <PlayCircle size={48} className="mb-2 text-referee-yellow" />
              <p className="text-sm">
                {language === 'ar' ? 'فيديو الحالة' : 'Incident Video'}
              </p>
            </div>
          )}
          
          {/* VAR analysis overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3">
            {recognizedPlayer && selectedCardType ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className={`w-4 h-6 rounded-sm mr-2 ${
                      selectedCardType === 'yellow' ? 'bg-referee-yellow' : 'bg-referee-red'
                    }`}
                  />
                  <span className="text-sm">{recognizedPlayer.name}</span>
                </div>
                <Play size={16} className="text-referee-yellow" />
              </div>
            ) : (
              <p className="text-sm text-center text-gray-400">
                {language === 'ar' ? 'الحالة قيد المراجعة' : 'Incident under review'}
              </p>
            )}
          </div>
        </div>
        
        {/* Decision recommendation */}
        <div className="mt-3 p-3 bg-referee-blue bg-opacity-20 rounded-md">
          <h3 className="text-sm font-semibold mb-2">
            {language === 'ar' ? 'توصية القرار' : 'Decision Recommendation'}:
          </h3>
          {recognizedPlayer ? (
            <div className="text-sm">
              <p className="mb-2">
                {language === 'ar' 
                  ? `مخالفة مستحقة: ${selectedCardType === 'yellow' ? 'بطاقة صفراء' : selectedCardType === 'red' ? 'بطاقة حمراء' : 'تحت التحليل'}`
                  : `Recommended decision: ${selectedCardType === 'yellow' ? 'Yellow Card' : selectedCardType === 'red' ? 'Red Card' : 'Under Analysis'}`
                }
              </p>
              <p className="text-xs text-gray-400">
                {language === 'ar' 
                  ? 'وفقًا للمادة 12 من قوانين اللعبة - الأخطاء وسوء السلوك'
                  : 'According to Law 12 of the Laws of the Game - Fouls and Misconduct'
                }
              </p>
            </div>
          ) : (
            <p className="text-sm text-gray-400">
              {language === 'ar' ? 'انتظار التعرف على اللاعب...' : 'Waiting for player recognition...'}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default VarScreen;
