import { UserProviderWrapper } from './User';
import '../style/App.css';
import Search from './Search';
import Navigation from './Navigation'
import FullArticle from "./FullArticle";
import ArticleCard from "./ArticleCard"

function App() {

  return (
    <UserProviderWrapper>
      <div class="App">
        <header class="App-header">
          <Navigation />
          <h1>
            LOGO
          </h1>
        </header>
        <body class ="App-body">
          <Search />

        </body>
      </div>
    </UserProviderWrapper>
  );
}

export default App;
