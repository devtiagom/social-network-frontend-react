import React from 'react';

import './style.css';

export default props => (
    <div className="card about-me">
        <div className="card-header bg-primary text-white">
            {/* <h5 className="card-title">Sobre mim</h5> */}
            Sobre mim
        </div>
        <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                    <a className="nav-link" href="#">Informações Pessoais</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">Trabalho</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Educação</a>
                </li>
            </ul>
        </div>
        <div className="card-body">
            <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ducimus recusandae nulla. Nobis culpa ea, atque consequatur hic tempora officiis ipsam quidem repellendus vero, fuga tenetur earum maiores accusamus dignissimos corporis nihil?
                Enim ducimus recusandae nulla. Nobis culpa ea, atque consequatur hic tempora officiis ipsam quidem repellendus vero, fuga tenetur earum maiores accusamus dignissimos corporis nihil?
            </p>
        </div>
    </div>
);