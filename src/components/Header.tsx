
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Button } from '@/components/ui/button';
import { ScanFace } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header: React.FC = () => {
  const { language, translations } = useAppContext();
  const navigate = useNavigate();

  const handleCardSelection = (cardType: 'yellow' | 'red') => {
    navigate('/card-issuance', { state: { cardType } });
  };

  return (
    <header className="bg-black bg-opacity-50 py-6 px-6 flex justify-between items-center">
      <div className="text-white font-bold text-2xl">
        {translations.appTitle[language]}
      </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            size="lg"
            className="flex items-center space-x-3 bg-gradient-to-r from-referee-blue to-black hover:from-blue-600 hover:to-gray-800 text-white font-semibold"
          >
            <ScanFace size={24} />
            <span className="text-lg">
              {language === 'ar' ? 'إشهار البطاقة' : 'Issue Card'}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem 
            onClick={() => handleCardSelection('yellow')}
            className="flex items-center space-x-2 py-3 cursor-pointer"
          >
            <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
            <span>{language === 'ar' ? 'بطاقة صفراء' : 'Yellow Card'}</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => handleCardSelection('red')}
            className="flex items-center space-x-2 py-3 cursor-pointer"
          >
            <div className="w-4 h-4 bg-red-600 rounded-sm"></div>
            <span>{language === 'ar' ? 'بطاقة حمراء' : 'Red Card'}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
