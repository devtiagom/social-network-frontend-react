import React from 'react';
import { FaHome, FaUser, FaUsers, FaEnvelope } from 'react-icons/fa'

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
            <Menuitem
                icon={FaUsers}
                text="Sua Rede"
                path="/network"
                menuMode={null}
            />
            <Menuitem
                icon={FaEnvelope}
                text="Suas Mensagens"
                path="/messages"
                menuMode={null}
            />
        </MenuList>
    </section>
);