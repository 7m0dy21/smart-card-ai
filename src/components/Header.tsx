
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Button } from '@/components/ui/button';
import { ScanFace } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const { language, translations } = useAppContext();
  const navigate = useNavigate();

  return (
    <header className="bg-black bg-opacity-50 py-4 px-4 flex justify-between items-center">
      <div className="text-white font-bold text-xl">
        {translations.appTitle[language]}
      </div>
      
      <Button 
        onClick={() => navigate('/card-issuance')} 
        variant="outline"
        className="flex items-center space-x-2"
      >
        <ScanFace size={16} />
        <span>{language === 'ar' ? 'إشهار البطاقة' : 'Issue Card'}</span>
      </Button>
    </header>
  );
};

export default Header;
