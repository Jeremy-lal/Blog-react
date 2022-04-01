import React, { useState } from 'react'
import { Article } from '../models/article'

type ArticleFormPros = {
    article?: Article,
    isEdit: boolean,
    onSubmit: (article: Article) => void
}

function ArticleForm({ article, isEdit, onSubmit }: ArticleFormPros) {
    const [form, setForm] = useState<Article>(article || {
        title: '',
        image: '',
        content: '',
        created_at: new Date(),
        author_id: 1
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const fieldName: string = e.target.name;
        const fieldValue: string = e.target.value;
        const newField = { [fieldName]: fieldValue };

        setForm({ ...form, ...newField });
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        onSubmit(form);
    }

    return (
        <form className="articleForm" onSubmit={submitForm}>
            <label>
                <input type="text" name="title" placeholder='Title' value={form.title} onChange={handleInputChange} />
            </label>
            <label>
                <input type="text" name="image" placeholder='Image url' value={form.image} onChange={handleInputChange} />
            </label>
            <textarea name="content" cols={30} rows={10} value={form.content} onChange={handleInputChange}>Content</textarea>

            <button>{isEdit ? 'Edit' : 'Add'}</button>
        </form>
    )
}

export default ArticleForm