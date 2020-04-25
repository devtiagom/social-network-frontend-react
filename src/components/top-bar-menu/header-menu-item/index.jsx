import React from 'react';

import './style.css';
import SearchItem from '../../../components/search-item';

export default props => {
    const Icon = props.icon;

    const iconLink = () => (
        <a href="#" className="header-menu-link">
            <Icon className="header-menu-icon" />
        </a>
    );

    const buttonLink = () => (
        <button className="header-menu-button">
            <Icon className="header-menu-icon" />
        </button>
    );

    const searchItem = () => <SearchItem />;

    const menuItem = () => {
        switch (props.type) {
            case 'icon-link': return iconLink();
            case 'button-link': return buttonLink();
            case 'search-item': return searchItem();
            default: return false;
        }
    }

    return (
        <li className="header-menu-item">
            {menuItem()}
        </li>
    );
}