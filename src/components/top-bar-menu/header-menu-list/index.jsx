import React from 'react';
import { FaBars } from 'react-icons/fa';

import './style.css';
import HeaderMenuItem from '../header-menu-item';
import SearchItem from '../../search-item';

export default props => (
    <nav className="header-menu">
        <ul className="header-menu-list">
            <HeaderMenuItem icon={FaBars} />
        </ul>

        <ul className="header-menu-list">
            <li>
                <SearchItem />
            </li>
            {props.children}
        </ul>
    </nav>
);