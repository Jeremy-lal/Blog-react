import { useEffect, useState, useContext } from 'react'
import { Article } from '../models/article'
import ArticleCard from '../components/ArticleCard'
import { useNavigate } from 'react-router-dom'
import ArticleService from '../services/article.service'
import AuthContext from '../context/AuthProvider'

function Profil() {
    const [articles, setArticles] = useState<Article[]>()
    const navigate = useNavigate()
    const { auth } = useContext(AuthContext) as any

    useEffect(() => {
        ArticleService.getUserArticles(auth.id).then(articles => {
            setArticles(articles)
        })
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