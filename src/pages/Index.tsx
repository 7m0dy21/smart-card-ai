
import React from 'react';
import { AppProvider } from '../context/AppContext';
import Header from '../components/Header';
import CameraView from '../components/CameraView';
import PlayerRecognition from '../components/PlayerRecognition';
import CardControls from '../components/CardControls';
import MatchDetails from '../components/MatchDetails';
import IncidentHistory from '../components/IncidentHistory';

const Index = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-b from-referee-blue to-black text-white">
        <Header />
        
        <div className="container mx-auto py-6 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <CameraView />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PlayerRecognition />
                <CardControls />
              </div>
            </div>
            
            <div className="space-y-6">
              <MatchDetails />
              <IncidentHistory />
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default Index;
