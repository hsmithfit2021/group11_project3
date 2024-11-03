import {useState} from "react";
import '../style/App.css';
import Search from './Search';
import Navigation from './Navigation'
import FullArticle from "./FullArticle";

function App() {
  return (
    <div class="App">
      <header class="App-header">
        <Navigation />
        <h1>
          LOGO
        </h1>
      </header>
      <body class ="App-body">
        <Search />
        <FullArticle />
      </body>
    </div>
  );
}

export default App;
