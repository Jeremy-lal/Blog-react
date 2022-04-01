import { useState, useEffect } from 'react'
import { Article } from '../models/article'
import { User } from '../models/user'
import { useNavigate } from 'react-router-dom'
import ArticleService from '../services/article.service'
import UserService from '../services/user.service'

function Admin() {
    const [articles, setArticles] = useState<Article[]>()
    const [users, setUsers] = useState<User[]>()
    const navigate = useNavigate()

    useEffect(() => {
        getArticles()
        getUsers()
    }, [])

    const getUsers = () => {
        UserService.getUsers().then(users => {
            setUsers(users)
        })
    }

    const getArticles = () => {
        ArticleService.getArticles().then(articles => {
            setArticles(articles)
        })
    }

    const seeArticle = (id?: number) => {
        if (id) {
            navigate(`/articles/${id}`)
        }
    }

    const deleteArticle = (id?: number) => {
        const check = window.confirm('Are you sure you want to delete this article ?')

        if (check && id) {
            ArticleService.deleteArticle(id).then(() => {
                getArticles()
            })
        }
    }

    const deleteUser = (id?: number) => {
        const check = window.confirm('Are you sure you want to delete this user ?')

        if (check && id) {
            UserService.deleteUser(id).then(() => {
                getUsers()
            })
        }
    }

    return (
        <div>
            <table>
                <caption>List of all the users</caption>
                <thead>
                    <th>Id</th>
                    <th>User</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        users && users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td><button onClick={() => deleteUser(user.id)}>Delete</button> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <table>
                <caption>List of all the articles</caption>
                <thead>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Created</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        articles && articles.map(article => (
                            <tr key={article.id}>
                                <td>{article.id}</td>
                                <td>{article.title}</td>
                                <td>{article.created_at}</td>
                                <td><button onClick={() => deleteArticle(article.id)}>Delete</button> <button onClick={() => seeArticle(article.id)}>See</button> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Admin