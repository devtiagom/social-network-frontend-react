import React from 'react';

import './style.css';
import SideBarHeader from './side-bar-header';
import SideBarBody from './side-bar-body';

export default props => (
    <aside className="side-bar side-bar-lg">
        <SideBarHeader />
        <SideBarBody />
    </aside>
);