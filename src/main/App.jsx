import React from 'react';

import './App.css';

// import Header from '../template/header';
// import SideBar from '../template/side-bar';
// import Main from '../template/main';

import { DynamicSideBarLayout } from '../layouts';

function App() {
  return (
    // <div className="App">
    //   <Header />
    //   <SideBar />
    //   <Main />
    // </div>

    <DynamicSideBarLayout>
      <div className="App">
        <h1>Usando layout com menu!</h1>
      </div>
    </DynamicSideBarLayout>
  );
}

export default App;
