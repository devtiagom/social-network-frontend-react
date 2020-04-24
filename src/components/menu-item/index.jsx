import React from 'react';

import './style.css';

export default props => {
    const Icon = props.icon;

    return (
        <li className="menu-item">
            <a href="#" className="menu-item-link">
                <Icon className="menu-item-icon"/>
                <span className="menu-item-text text-on">{props.text}</span>
            </a>
        </li>
    );
}