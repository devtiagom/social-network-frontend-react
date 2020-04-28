import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import { sideBarModes } from '../../../globalDefinitions';

export default props => {
    const Icon = props.icon;

    return (
        <li className="menu-item">
            <Link className="menu-item-link" to={props.path}>
                <span className="menu-item-icon"><Icon /></span>
                <span className={`menu-item-text ${props.sideBarMode === sideBarModes.lg ? 'text-on' : 'text-off'}`}>
                    {props.text}
                </span>
            </Link>
        </li>
    );
}