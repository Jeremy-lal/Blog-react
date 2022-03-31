import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Article } from '../models/article';

type ArticleDetailProps = {
    article: Article
}

function ArticleCard({ article }: ArticleDetailProps) {
    const navigate = useNavigate();

    return (
        <div className="responsive" onClick={() => navigate(`/articles/${article.id}`)}>
            <div className="gallery">
                <img src={article.image} alt="Descriptif de l'article" width="600" height="400" />
                <div className="desc">{article.title}</div>
            </div>
        </div>

    )
}

export default ArticleCard