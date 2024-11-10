// src/components/ArticleCard.js

import '../style/ArticleCard.css';

function ArticleCard({ article }) {
  // Use the article prop to display article data
  return (
    <div className="proj-card">
      <img src={article.card_image} alt={article.title} />
      <a href={article.url}>{article.domain}</a>
      <h4>{article.title}</h4>
      <p className="date">{formatDate(article.published_date)}</p>
      <p className="desc">{getExcerpt(article.content)}</p>
    </div>
  );
}

// Helper function to format the date
function formatDate(dateString) {
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}

// Helper function to get excerpt
function getExcerpt(content) {
  if (!content) return '';
  return content.length > 150 ? content.substring(0, 147) + '...' : content;
}

export default ArticleCard;
