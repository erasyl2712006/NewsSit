import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import newsData from '../data/news';
import './ArticlePage.css';

export default function ArticlePage() {
  const { id } = useParams();
  const article = newsData.find((item) => item.id.toString() === id);

  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem(`comments_${id}`);
    if (stored) setComments(JSON.parse(stored));
  }, [id]);

  const saveComments = (updated) => {
    localStorage.setItem(`comments_${id}`, JSON.stringify(updated));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Введите имя (минимум 2 буквы)';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }
    if (!formData.comment.trim()) {
      newErrors.comment = 'Комментарий не может быть пустым';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newEntry = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      text: formData.comment.trim(),
      date: new Date().toLocaleString(),
    };

    const updatedComments = [...comments, newEntry];
    setComments(updatedComments);
    saveComments(updatedComments);

    setFormData({ name: '', email: '', comment: '' });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!article) {
    return (
      <div className="article-page">
        <h2>Статья не найдена</h2>
        <Link to="/" className="back-button">← Вернуться на главную</Link>
      </div>
    );
  }

  return (
    <div className="article-page">
      <Link to="/" className="back-button">← Вернуться на главную</Link>
      <div className="article-content">
        <h1>{article.title}</h1>
        <p className="article-date">Опубликовано: {article.date || 'неизвестно'}</p>
        <p className="article-body">{article.content || 'Контент статьи скоро будет добавлен.'}</p>
      </div>

      <div className="comments-section">
        <h3>Комментарии</h3>

        <form onSubmit={handleSubmit} className="comment-form">
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <textarea
            name="comment"
            rows="3"
            placeholder="Комментарий"
            value={formData.comment}
            onChange={handleChange}
            required
          />
          {errors.comment && <span className="error">{errors.comment}</span>}

          <button type="submit">Добавить комментарий</button>
        </form>

        {comments.length === 0 ? (
          <p>Комментариев пока нет.</p>
        ) : (
          <ul className="comment-list">
            {comments.map((comment, index) => (
              <li key={index}>
                <p><strong>{comment.name}</strong> ({comment.email})</p>
                <p>{comment.text}</p>
                <span className="comment-date">{comment.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
