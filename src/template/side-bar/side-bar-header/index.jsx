import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import { sideBarModes } from '../../../globalDefinitions';

export default props => (
    <section className="side-bar-header">
        <div className="side-bar-header-group-items">
            <div className="side-bar-header-item">
                <Link to="/">
                    <img src="assets/IconShareUser.png" alt="icon" className="side-bar-header-icon" />
                </Link>
            </div>
            <div className={`side-bar-header-item ${props.sideBarMode === sideBarModes.lg ? 'item-on' : 'item-off'}`}>
                <Link to="/">
                    <img className="side-bar-header-logo" src="assets/Logo.png" alt="logo" />
                </Link>
            </div>
        </div>
    </section>
);