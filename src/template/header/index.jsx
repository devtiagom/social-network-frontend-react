import React from 'react';
import { FaHome, FaUsers, FaEnvelope, FaUser } from 'react-icons/fa';

import './style.css';
import HeaderMenuList from '../../components/top-bar-menu/header-menu-list';
import HeaderMenuItem from '../../components/top-bar-menu/header-menu-item';

export default props => (
    <header className="header header-sm">
        <HeaderMenuList>
            <HeaderMenuItem type="icon-link" icon={FaHome} path="/" />
            <HeaderMenuItem type="icon-link" icon={FaUsers} path="/network" />
            <HeaderMenuItem type="icon-link" icon={FaEnvelope} path="/messages" />
            <HeaderMenuItem type="icon-link" icon={FaUser} path="/profile" />
        </HeaderMenuList>
    </header>
);