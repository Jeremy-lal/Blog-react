import { useState, useEffect } from 'react'
import { Article } from '../models/article'
import { users } from '../data/users'
import { useNavigate, useParams } from 'react-router-dom'
import ArticleService from '../services/article.service'

function ArticleDetails() {
    const [article, setArticle] = useState<Article>()
    const [author, setAuthor] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        ArticleService.getArticle(Number(id)).then(article => {
            if (article) {
                setArticle(article)
                const author = users.find(user => user.id === article.author_id)

                if (author) {
                    setAuthor(author.username)
                }
            }
        })
    }, [])

    const deleteArticle = () => {
        const check = window.confirm('Are you sure you want to delete this article ?')

        if (check && article?.id) {
            ArticleService.deleteArticle(article.id).then(() => {
                navigate('/articles')
            })
        }
    }

    const editArticle = () => {
        navigate(`/articles/${id}/edit`)
    }

    return (
        <div className="article">
            <button onClick={() => navigate(-1)} title="back"><i className="fa-solid fa-arrow-left"></i></button>
            <div className="actions">
                <button onClick={editArticle} title="edit" className='edit'><i className="fa-solid fa-pen"></i></button>
                <button onClick={deleteArticle} title="delete" className='delete'><i className="fa-solid fa-trash"></i></button>
            </div>
            <h1>{article?.title}</h1>
            <p className='date'>{author} | {article?.created_at}</p>
            <img src={article?.image} alt="description" />
            <p>{article?.content}</p>
        </div>
    )
}

export default ArticleDetails   