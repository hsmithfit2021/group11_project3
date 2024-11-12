// src/components/ArticleCard.js

import '../style/ArticleCard.css';
import {useState} from "react";
import FullArticle from './FullArticle';
import React from 'react';

function ArticleCard({ article, openArticle }) {
  // Define the variables for sentence, word, and syllable counts
  const sentenceCount = countSentences(article.content);
  const wordCount = countWords(article.content);
  const syllableCount = countSyllables(article.content);
  
  return (
    <div className="proj-card" onClick={() => openArticle(article)}>
      <img src={article.large_image_url} alt={article.title} />
      <a href={article.url}>{article.domain}</a>
      <h4>{article.title}</h4>
      <p className="date">{formatDate(article.published_date)}</p>
      <p className="desc">{getExcerpt(article.content)}</p>
      <p className="metrics">
        Sentences: {countSentences(article.content)} | Words: {countWords(article.content)} | Syllables: {countSyllables(article.content)}
      </p>
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
