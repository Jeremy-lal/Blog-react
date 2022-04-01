import React, { useEffect, useState } from 'react'
import { articles as ListArticles } from '../data/articles'
import { Article } from '../models/article'
import ArticleCard from '../components/ArticleCard'
import { useNavigate } from 'react-router-dom'

function Profil() {
    const [articles, setArticles] = useState<Article[]>()
    const navigate = useNavigate()

    useEffect(() => {
        setArticles(ListArticles)
    }, [])

    const deleteAccoutn = () => {
        const confirm = window.confirm('Are you sure you want to delete your account?')

        if (confirm) {
            navigate('/login')
        }

    }

    return (
        <div className="profil-page">
            <h1>Profil</h1>

            <button className="delete" onClick={deleteAccoutn}>Delete Account</button>


            <h2>Your articles <i className="fa-solid fa-circle-plus" onClick={() => navigate('/articles/new')}></i></h2>

            <div className='articles'>
                {
                    articles && articles.map(article => (
                        <ArticleCard article={article} key={article.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Profil