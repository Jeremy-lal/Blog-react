import React, { useState, useEffect } from 'react'
import { Article } from '../models/article'
import { articles as ListArticles } from '../data/articles'
import { useNavigate, useParams } from 'react-router-dom'

function ArticleDetails() {
    const [article, setArticle] = useState<Article>()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setArticle(ListArticles.find(article => article.id === Number(id)))
    }, [])

    return (
        <div className="article">
            <button onClick={() => navigate(-1)} title="back"><i className="fa-solid fa-arrow-left"></i></button>
            <h1>{article?.title}</h1>
            <p className='date'>{article?.author} | {article?.created_at.toDateString()}</p>
            <img src={article?.image} alt="description" />
            <p>{article?.content}</p>
        </div>
    )
}

export default ArticleDetails   