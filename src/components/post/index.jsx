import React from 'react';

import './style.css';

export default props => (
    <div className="card post">
        <div className="card-header">
        <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle text-muted">{props.author}</h6>
        </div>
        <div className="card-body">
            <p className="card-text">{props.content}</p>
        </div>
        <div className="card-footer bg-white">
            <p className="card-text text-muted">Likes: {props.likes} Deslikes: {props.dislikes}</p>
        </div>
    </div>
);