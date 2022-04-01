import { useEffect, useState } from 'react'
import { Article } from '../models/article'
import ArticleCard from '../components/ArticleCard'
import ArticleService from '../services/article.service'

function Articles() {
    const [articles, setArticles] = useState<Article[]>()

    useEffect(() => {
        ArticleService.getArticles().then(articles => {
            setArticles(articles)
        })
    }, [])

    return (
        <>
            <h1>Our selection of articles</h1>

            <div className='articles'>
                {
                    articles && articles.map(article => (
                        <ArticleCard article={article} key={article.id} />
                    ))
                }
            </div>
        </>
    )
}

export default Articles