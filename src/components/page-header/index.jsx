import React from 'react';

import './style.css';

export default props => {
    const Icon = props.icon;

    return (
        <div className="page-header">
            <Icon size={16} color="#727272" />
            <span className="page-title">{props.title}</span>
        </div>
    );
} 