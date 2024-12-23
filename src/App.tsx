import React from 'react';
import StarField from './components/StarField';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <StarField />
      <ProfileCard />
    </div>
  );
}

export default App;