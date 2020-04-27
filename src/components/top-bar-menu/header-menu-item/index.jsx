import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import SearchItem from '../../../components/search-item';

export default props => {
    const Icon = props.icon;

    const iconLink = () => (
        <Link to={props.path} className="header-menu-link">
            <Icon className="header-menu-icon" />
        </Link>
    );

    const buttonLink = () => (
        <button
            className="header-menu-button"
            onClick={() => props.toggleSideBarMode(props.sideBarMode)}
        >
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