import React from 'react';

import './style.css';

export default props => (
    <div className="card post">
        <div className="card-header">
            <h5 className="card-title">Título da Postagem</h5>
            <h6 className="card-subtitle text-muted">Autor da Postagem</h6>
        </div>
        <div className="card-body">
            <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In delectus nobis natus excepturi, cum asperiores alias sunt odio necessitatibus placeat illo corporis similique reprehenderit totam fuga inventore impedit pariatur magni cupiditate, rerum ipsam! Eum, minima corrupti alias sed ducimus fugit, accusantium a culpa modi expedita saepe. Impedit repudiandae quam, nihil, ullam in delectus ipsam maxime quidem exercitationem alias libero eum et voluptate aliquam cupiditate praesentium aut hic. Earum similique distinctio reprehenderit tenetur tempore neque exercitationem aspernatur, ex laudantium quis consectetur sint libero laborum repellendus quidem alias qui autem laboriosam adipisci aliquid? Aut nihil corporis labore. Sint repudiandae accusantium voluptatum facilis.
            </p>
        </div>
        <div className="card-footer bg-white">
            <p className="card-text text-muted">Likes: 10 Deslikes: 2</p>
        </div>
    </div>
);