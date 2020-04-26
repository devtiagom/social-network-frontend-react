import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import Show from '../../../common/Show';

export default props => {
    const Icon = props.icon;

    return (
        <li className="menu-item">
            <Link className="menu-item-link" to={props.path}>
                <Icon className="menu-item-icon" />
                <Show if={true}>
                    <span className="menu-item-text text-on">{props.text}</span>
                </Show>
            </Link>
        </li>
    );
}