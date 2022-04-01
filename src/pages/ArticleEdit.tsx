import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ArticleForm from '../components/ArticleForm'
import { articles as ListArticles } from '../data/articles'
import { Article } from '../models/article'

function ArticleEdit() {
    const [article, setArticle] = useState<Article>()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setArticle(ListArticles.find(article => article.id === Number(id)))

        // confirm that he is the good author
    }, [])

    const onSubmit = (articleForm: Article) => {
        console.log(articleForm);

        navigate('/articles')
    }

    return (
        <div className="editPage">
            <button onClick={() => navigate(-1)} title="back" className="back"><i className="fa-solid fa-arrow-left"></i></button>
            <h1>Edit article</h1>
            {
                article && (<ArticleForm article={article} isEdit={true} onSubmit={onSubmit} />)
            }
        </div>
    )
}

export default ArticleEdit