import React from 'react';
import { FaHome, FaUser } from 'react-icons/fa'

import './style.css';
import MenuList from '../../../components/side-bar-menu/menu-list';
import Menuitem from '../../../components/side-bar-menu/menu-item';

export default props => (
    <section className="side-bar-body">
        <MenuList>
            <Menuitem
                icon={FaHome}
                text="Página Inicial"
                path="/"
                menuMode={null}
            />
            <Menuitem
                icon={FaUser}
                text="Seu Perfil"
                path="/profile"
                menuMode={null}
            />
        </MenuList>
    </section>
);