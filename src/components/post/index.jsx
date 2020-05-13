import React from 'react';
import { FaThumbsUp, FaThumbsDown, FaShareAlt,  FaComments} from 'react-icons/fa';

import './style.css';
import Show from '../../common/Show';

export default props => (
    <div className="card post">
        <div className="card-header">
        <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle text-muted">{props.author}</h6>
        </div>
        <div className="card-body">
            <p className="card-text">{props.content}</p>
        </div>
        <div className="card-footer bg-white post-card-footer">
            <div className="post-card-footer-buttons">
                <button>
                    <FaThumbsUp color="#777" />
                    <Show if={props.likes != null && props.likes > 0}>
                        <span className="badge badge-danger badge-icon-post">{props.likes}</span>
                    </Show>
                </button>
                <button>
                    <FaThumbsDown color="#777" />
                    <Show if={props.dislikes != null && props.dislikes > 0}>
                        <span className="badge badge-danger badge-icon-post">{props.dislikes}</span>
                    </Show>
                </button>
            </div>
            <div className="post-card-footer-buttons">
                <button><FaShareAlt color="#777" /></button>
                <button><FaComments color="#777" /></button>
            </div>
        </div>
    </div>
);