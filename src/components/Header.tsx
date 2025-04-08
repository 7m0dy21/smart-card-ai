
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const { language, setLanguage, translations } = useAppContext();

  return (
    <header className="bg-referee-blue text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{translations.appTitle[language]}</h1>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
          className="text-white border-white hover:text-referee-blue hover:bg-white"
        >
          {language === 'ar' ? 'English' : 'العربية'}
        </Button>
      </div>
    </header>
  );
};

export default Header;
