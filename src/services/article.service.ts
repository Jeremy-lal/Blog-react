import { Article } from "../models/article";

export default class ArticleService {

    static getArticles(): Promise<Article[]> {
        return fetch('http://localhost:3000/articles')
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

    static getArticle(id: number): Promise<Article | null> {
        return fetch(`http://localhost:3001/articles/${id}`)
            .then(response => response.json())
            .then(data => this.isEmpty(data) ? null : data)
            .catch(error => this.handleError(error));
    }

    static postArticle(article: Article): Promise<Article> {
        return fetch('http://localhost:3001/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        })
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

    static updateArticle(article: Article): Promise<Article> {
        return fetch(`http://localhost:3001/Articles/${article.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        })
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

    static deleteArticle(id: number): Promise<Article> {
        return fetch(`http://localhost:3001/Articles/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

    static searchArticle(search: string): Promise<Article[]> {
        return fetch(`http://localhost:3001/Articles?q=${search}`)
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    static handleError(error: Error): void {
        console.error(error);
    }
}