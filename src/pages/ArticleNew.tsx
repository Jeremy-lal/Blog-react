import ArticleForm from '../components/ArticleForm'
import { useNavigate } from 'react-router-dom'
import { Article } from '../models/article'

function ArticleNew() {
  const navigate = useNavigate()

  const onSubmit = (articleForm: Article) => {
    console.log(articleForm);
    navigate('/articles')
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