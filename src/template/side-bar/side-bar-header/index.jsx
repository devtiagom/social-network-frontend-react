import React from 'react';
import { FaShareAlt } from 'react-icons/fa';

import './style.css';
import Show from '../../../common/Show';

export default props => (
    <section className="side-bar-header">
        <div className="side-bar-header-group-items">
            <div className="side-bar-header-item">
                <FaShareAlt className="side-bar-header-icon" />
            </div>
            <div className="side-bar-header-item">
                <Show if={true}>
                    <img className="side-bar-header-img" src="assets/Logo.png" alt="logo" />
                </Show>
            </div>
        </div>
    </section>
);