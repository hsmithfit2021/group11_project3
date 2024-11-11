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
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        </div>
      </div>
    </UserProviderWrapper>
  );
}

export default App;
