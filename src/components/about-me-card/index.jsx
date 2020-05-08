import React from 'react';

import './style.css';

export default props => (
    <div className="card about-me">
        <div className="card-header bg-primary text-white">
            {/* <h5 className="card-title">Sobre mim</h5> */}
            Sobre mim
        </div>
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                    <a class="nav-link" href="#">Informações Pessoais</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">Trabalho</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Educação</a>
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