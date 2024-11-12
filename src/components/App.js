// src/components/App.js

import logo from "../assets/Newslook.svg"
import { UserProviderWrapper } from './User';
import '../style/App.css';
import Search from './Search';
import Navigation from './Navigation';
import FullArticle from './FullArticle';
import ArticleCard from './ArticleCard';
import { useState } from 'react';

function App() {
  const [filteredArticles, setFilteredArticles] = useState([]);

  // full article code
  const [fullArticleVisible, showFull] = useState(false);
  const [fullArticleContent, setArticle] = useState(false);
  const cardClicked = (article) => {
    setArticle(article)
    showFull(true)
  };
  const fullClosed = () => {
    showFull(false);
  };

  // Renders cards, or full view if a card is clicked
  if (!fullArticleVisible) {
    return (
      <UserProviderWrapper>
        <div className="App">
          <header className="App-header">
            <Navigation />
            <div class= "logo">
              <img src={logo} />
            </div>
          </header>
          <div className="App-body">
            <Search setFilteredArticles={setFilteredArticles} />
            <div className="articles-container">
              {filteredArticles.map((article, index) => (
                <ArticleCard key={index} article={article} onClick={cardClicked} />
              ))}
            </div>
          </div>
        </div>
      </UserProviderWrapper>
    );
  } else {
    return (
      <UserProviderWrapper>
        <div className="App">
          <FullArticle article={fullArticleContent} onClose={fullClosed}/>
        </div>
      </UserProviderWrapper>
    )
  }
}

export default App;
