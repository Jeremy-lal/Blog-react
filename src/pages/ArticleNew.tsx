import ArticleForm from '../components/ArticleForm'
import { useNavigate } from 'react-router-dom'
import { Article } from '../models/article'
import ArticleService from '../services/article.service'
import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'

function ArticleNew() {
  const navigate = useNavigate()
  const { auth } = useContext(AuthContext) as any

  const onSubmit = (articleForm: Article) => {
    articleForm.author_id = auth.id
    ArticleService.postArticle(articleForm).then(() => {
      navigate('/articles')
    })
    console.log(articleForm);
  }

  return (
    <div className="editPage">
      <button onClick={() => navigate(-1)} title="back" className="back"><i className="fa-solid fa-arrow-left"></i></button>
      <h1>New article</h1>

      <ArticleForm isEdit={false} onSubmit={onSubmit} />

    </div>
  )
}

export default ArticleNew