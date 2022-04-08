import { useState, useEffect } from 'react'
import { Article } from '../models/article'
import { User } from '../models/user'
import { useNavigate, useLocation } from 'react-router-dom'
import ArticleService from '../services/article.service'
import UserService from '../services/user.service'
import useAxiosPrivate from '../hooks/useAxiosPrivate'

function Admin() {
    const [articles, setArticles] = useState<Article[]>()
    const [users, setUsers] = useState<User[]>()
    const navigate = useNavigate()
    const location = useLocation()

    const controller = new AbortController();

    const axiosPrivate = useAxiosPrivate()

    useEffect(() => {
        getArticles()
        getUsers()

        return () => {
            controller.abort()
        }
    }, [])

    const getUsers = async () => {
        try {
            const response = await axiosPrivate.get('/users', { signal: controller.signal, withCredentials: true })
            if (response.data) {
                setUsers(response.data)
            }

        } catch (error) {
            console.log(error)
            navigate('/login', { state: { from: location }, replace: true })
        }
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
                    <tr>
                        <th>Id</th>
                        <th>User</th>
                        <th>Action</th>
                    </tr>
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
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Created</th>
                        <th>Action</th>
                    </tr>
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