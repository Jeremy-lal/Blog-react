import React, { useEffect, useState } from 'react'
import { articles as ListArticles } from '../data/articles'
import { Article } from '../models/article'
import ArticleCard from '../components/ArticleCard'

function Articles() {
    const [articles, setArticles] = React.useState<Article[]>()

    useEffect(() => {
        setArticles(ListArticles)
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