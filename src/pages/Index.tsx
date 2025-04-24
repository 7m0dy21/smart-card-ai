
import React from 'react';
import { AppProvider } from '../context/AppContext';
import Header from '../components/Header';
import CameraView from '../components/CameraView';
import CardControls from '../components/CardControls';
import MatchDetails from '../components/MatchDetails';
import IncidentHistory from '../components/IncidentHistory';
import FeaturesOverview from '../components/FeaturesOverview';
import VarScreen from '../components/VarScreen';
import { useIsMobile } from '../hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-b from-referee-blue to-black text-white">
        <Header />
        
        <div className="container mx-auto py-3 px-2 md:py-6 md:px-4">
          <FeaturesOverview />
          
          {isMobile ? (
            // Mobile Layout - Single column stack
            <div className="flex flex-col space-y-4">
              <CameraView />
              <VarScreen />
              <CardControls />
              <MatchDetails />
              <IncidentHistory />
            </div>
          ) : (
            // Desktop Layout - Multi-column grid
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <CameraView />
                <VarScreen />
                <CardControls />
              </div>
              
              <div className="space-y-6">
                <MatchDetails />
                <IncidentHistory />
              </div>
            </div>
          )}
        </div>
      </div>
    </AppProvider>
  );
};

export default Index;
