import React from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './style.css';
import Show from '../../../common/Show';

export default props => (
    <section className="side-bar-header">
        <div className="side-bar-header-group-items">
            <div className="side-bar-header-item">
                <Link to="/">
                    <FaShareAlt className="side-bar-header-icon" />
                </Link>
            </div>
            <div className="side-bar-header-item">
                <Show if={true}>
                    <Link to="/">
                        <img className="side-bar-header-img" src="assets/Logo.png" alt="logo" />
                    </Link>
                </Show>
            </div>
        </div>
    </section>
);