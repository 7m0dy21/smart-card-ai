
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { ScanFace, Camera, Shirt } from 'lucide-react';

const CardIssuance: React.FC = () => {
  const { language, translations, cameraActive, setCameraActive } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-referee-blue to-black text-white">
      <div className="container mx-auto py-6 px-4">
        <Card className="p-6 bg-black bg-opacity-30 border-0">
          <h1 className="text-2xl font-bold mb-6 text-center">
            {language === 'ar' ? 'إشهار البطاقة والتعرف على اللاعب' : 'Card Issuance & Player Recognition'}
          </h1>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Camera className="mr-3" size={24} />
                <span>{translations.camera[language]}</span>
              </div>
              <Button 
                variant={cameraActive ? 'destructive' : 'default'}
                onClick={() => setCameraActive(!cameraActive)}
              >
                {cameraActive 
                  ? translations.deactivate[language] 
                  : translations.activate[language]
                }
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ScanFace className="mr-3" size={24} />
                <span>{translations.playerRecognition[language]}</span>
              </div>
              <Button 
                variant="outline"
                disabled={!cameraActive}
              >
                {translations.capture[language]}
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shirt className="mr-3" size={24} />
                <span>{translations.jerseyRecognition[language]}</span>
              </div>
              <Button 
                variant="secondary"
                disabled={!cameraActive}
              >
                {translations.scan[language] ?? 'Scan'}
              </Button>
            </div>
          </div>
          
          <Button 
            className="w-full mt-6" 
            onClick={() => navigate('/')}
          >
            {language === 'ar' ? 'العودة للصفحة الرئيسية' : 'Return to Home'}
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default CardIssuance;
