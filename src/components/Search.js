// src/components/Search.js

import React, { useState, useEffect } from 'react';
import '../style/Search.css';
import articlesData from '../data/news_articles.json';

// Utility functions for readability calculations
function countWords(text) {
  return text.split(/\s+/).filter((word) => word.length > 0).length;
}

function countSentences(text) {
  return (text.match(/[.!?;:]+/g) || []).length;
}

function countSyllables(word) {
  word = word.toLowerCase();
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  const syllableMatch = word.match(/[aeiouy]{1,2}/g);
  return syllableMatch ? syllableMatch.length : 1;
}

function computeFleschIndex(syllableCount, wordCount, sentenceCount) {
  return (
    206.835 -
    1.015 * (wordCount / sentenceCount) -
    84.6 * (syllableCount / wordCount)
  );
}

function classifyArticleReadability(fleschIndex) {
  if (fleschIndex >= 90) return '5th grade';
  if (fleschIndex >= 80) return '6th grade';
  if (fleschIndex >= 70) return '7th grade';
  if (fleschIndex >= 60) return '8th & 9th grade';
  if (fleschIndex >= 50) return '10th to 12th grade';
  if (fleschIndex >= 30) return 'College';
  return 'College graduate';
}

function Search({ setFilteredArticles }) {
  const [readingLevel, setReadingLevel] = useState('');

  useEffect(() => {
    // Initially display all articles or handle as needed
    filterArticles(readingLevel);
    // eslint-disable-next-line
  }, []);

  const handleLevelChange = (event) => {
    const level = event.target.value;
    setReadingLevel(level);
    filterArticles(level);
  };

  const filterArticles = (level) => {
    const result = articlesData.filter((article) => {
      const content = article.content || article.text || '';
      const wordCount = countWords(content);
      const sentenceCount = countSentences(content) || 1; // Prevent division by zero
      const syllableCount = content
        .split(/\s+/)
        .reduce((sum, word) => sum + countSyllables(word), 0);

      const fleschIndex = computeFleschIndex(
        syllableCount,
        wordCount,
        sentenceCount
      );
      const readability = classifyArticleReadability(fleschIndex);

      return readability === level;
    });
    setFilteredArticles(result);
  };

  return (
    <div className="search-container">
      <select
        name="reading-level"
        id="reading-level"
        value={readingLevel}
        onChange={handleLevelChange}
      >
        <option disabled value="">
          Select a reading level
        </option>
        <option value="5th grade">5th Grade</option>
        <option value="6th grade">6th Grade</option>
        <option value="7th grade">7th Grade</option>
        <option value="8th & 9th grade">8th & 9th Grade</option>
        <option value="10th to 12th grade">10th to 12th Grade</option>
        <option value="College">College</option>
        <option value="College graduate">College Graduate</option>
      </select>
    </div>
  );
}

export default Search;
