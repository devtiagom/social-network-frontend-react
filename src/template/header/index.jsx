import React from 'react';
import { FaHome, FaUsers, FaEnvelope, FaUser } from 'react-icons/fa';

import './style.css';
import HeaderMenuList from '../../components/top-bar-menu/header-menu-list';
import HeaderMenuItem from '../../components/top-bar-menu/header-menu-item';

export default props => (
    <header className="header header-sm">
        <HeaderMenuList>
            <HeaderMenuItem icon={FaHome} />
            <HeaderMenuItem icon={FaUsers} />
            <HeaderMenuItem icon={FaEnvelope} />
            <HeaderMenuItem icon={FaUser} />
        </HeaderMenuList>
    </header>
);