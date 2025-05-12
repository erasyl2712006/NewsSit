import { useParams, Link } from 'react-router-dom';
import newsData from '../data/news';
import './ArticlePage.css';

export default function ArticlePage() {
  const { id } = useParams();
  const article = newsData.find((item) => item.id.toString() === id);

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
    </div>
  );
}
