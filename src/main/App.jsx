import React from 'react';

import './App.css';
import { DynamicSideBarLayout } from '../layouts';

function App() {
  return (
    <DynamicSideBarLayout>
      <div className="App">
        <h1>Usando layout com menu!</h1>
      </div>
    </DynamicSideBarLayout>
  );
}

export default App;
