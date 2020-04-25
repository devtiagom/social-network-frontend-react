import React from 'react';

import './style.css';

export default props => {
    const Icon = props.icon;

    return (
        <li className="header-menu-item">
            <a href="#" className="header-menu-link">
                <Icon className="header-menu-icon" />
            </a>
        </li>
    );
}