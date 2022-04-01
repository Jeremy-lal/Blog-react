import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ArticleForm from '../components/ArticleForm'
import { Article } from '../models/article'
import ArticleService from '../services/article.service'

function ArticleEdit() {
    const [article, setArticle] = useState<Article>()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        ArticleService.getArticle(Number(id)).then(article => {
            if (article) {
                setArticle(article)
            }
        })
        // check if good author
    }, [])

    const onSubmit = (articleForm: Article) => {
        console.log(articleForm);
        ArticleService.updateArticle(articleForm).then(() => {
            navigate('/articles')
        })
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