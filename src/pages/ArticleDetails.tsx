import React, { useState, useEffect } from 'react'
import { Article } from '../models/article'
import { articles as ListArticles } from '../data/articles'
import { users } from '../data/users'
import { useNavigate, useParams } from 'react-router-dom'

function ArticleDetails() {
    const [article, setArticle] = useState<Article>()
    const [author, setAuthor] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setArticle(ListArticles.find(article => article.id === Number(id)))

        if (article) {
            const author = users.find(user => user.id === article.author_id)

            if (author) {
                setAuthor(author.username)
            }
        }
    }, [])

    const deleteArticle = () => {
        const check = window.confirm('Are you sure you want to delete this article ?')

        if (check) {
            ListArticles.filter(article => article.id !== Number(id))
            navigate('/articles')
        }
    }

    return (
        <div className="article">
            <button onClick={() => navigate(-1)} title="back"><i className="fa-solid fa-arrow-left"></i></button>
            <button onClick={deleteArticle} title="delete" className='delete'><i className="fa-solid fa-trash"></i></button>
            <h1>{article?.title}</h1>
            <p className='date'>{author} | {article?.created_at.toDateString()}</p>
            <img src={article?.image} alt="description" />
            <p>{article?.content}</p>
        </div>
    )
}

export default ArticleDetails   