import React from 'react';
import { FaBars } from 'react-icons/fa';

import './style.css';
import HeaderMenuItem from '../header-menu-item';

export default props => (
    <nav className="header-menu">
        <ul className="header-menu-list">
            <HeaderMenuItem
                type="button-link"
                icon={FaBars}
                sideBarMode={props.sideBarMode}
                toggleSideBarMode={props.toggleSideBarMode}
            />
        </ul>

        <ul className="header-menu-list">
            <HeaderMenuItem type="search-item" />
            {props.children}
        </ul>
    </nav>
);