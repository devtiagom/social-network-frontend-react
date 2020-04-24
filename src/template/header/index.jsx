import React from 'react';
import { FaBars, FaHome, FaUsers, FaEnvelope, FaUser } from 'react-icons/fa';

import './style.css';

export default props => (
    <header className="header header-sm">
        <nav className="header-menu">
            <div className="header-menu-group">
                <div className="header-menu-item">
                    <a href="#" className="header-menu-link">
                        <FaBars className="header-menu-icon" />
                    </a>
                </div>
            </div>
            <div className="header-menu-group">
                <div className="header-menu-item">
                    <a href="#" className="header-menu-link">
                        <FaHome className="header-menu-icon" />
                    </a>
                </div>
                <div className="header-menu-item">
                    <a href="#" className="header-menu-link">
                        <FaUsers className="header-menu-icon" />
                    </a>
                </div>
                <div className="header-menu-item">
                    <a href="#" className="header-menu-link">
                        <FaEnvelope className="header-menu-icon" />
                    </a>
                </div>
                <div className="header-menu-item">
                    <a href="#" className="header-menu-link">
                        <FaUser className="header-menu-icon" />
                    </a>
                </div>
            </div>
        </nav>
    </header>
);