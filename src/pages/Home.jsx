import newsData from '../data/news';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">Добро пожаловать в NewsSite</h1>
        <p className="hero-subtitle">Читайте последние новости и аналитику в удобном формате</p>
      </section>

      <section className="news-section">
        <h2 className="section-title">Последние новости</h2>
        <div className="news-grid">
          {newsData.map((item) => (
            <Link to={`/article/${item.id}`} key={item.id} className="news-card">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <span className="read-more">Читать далее →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
