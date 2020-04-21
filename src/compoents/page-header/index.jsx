import React from 'react';
import { FaHome, FaUser } from 'react-icons/fa';

import './style.css';

export default props => {
    const getIcon = () => {
        if (props.icon === null) return null;
        
        switch (props.icon) {
            case 'home':
                return <FaHome size={16} color="#727272" />
            case 'user':
                return <FaUser size={16} color="#727272" />
            default:
                return null;
        }
    }

    return (
        <div className="page-header">
            {getIcon()}
            <span className="page-title">{props.title}</span>
        </div>
    );
} 