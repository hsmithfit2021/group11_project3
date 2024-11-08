import { useContext } from 'react';
import UserContext from './User';
import '../style/Preferences.css';

function Preferences({ fn }) {
  const { currentPreferences, setCurrentPreferences } = useContext(UserContext);

  function makeCategoryChange(category) {
    let updatedCategories;
  
    if (!currentPreferences.categories.includes(category)) {
      updatedCategories = currentPreferences.categories.slice();
      updatedCategories.push(category);
    } else {
      updatedCategories = currentPreferences.categories.filter(function(currentCategory) {
        return currentCategory !== category;
      });
    }
  
    setCurrentPreferences({ categories: updatedCategories });
  }

  const xButtonClick = () => {
    fn(false);
  };

  return (
    <div class="flex-center">
      <form class="preference-window">
        <header>
          <button onClick={xButtonClick}>X</button>
          <p>Select news categories to fine-tune your feed.</p>
        </header>
        <label>
          <p>🧪</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Science')}
            onChange={makeCategoryChange('Science')}
          />
          Science
        </label>
        <label>
          <p>⚙️</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Technology')}
            onChange={makeCategoryChange('Technology')}
          />
          Technology
        </label>
        <label>
          <p>💊</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Health')}
            onChange={makeCategoryChange('Health')}
          />
          Health
        </label>
        <label>
          <p>🌎</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('World')}
            onChange={makeCategoryChange('World')}
          />
          World
        </label>
        <label>
          <p>🍿</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Entertainment')}
            onChange={makeCategoryChange('Entertainment')}
          />
          Entertainment
        </label>
        <label>
          <p>🏆</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Sports')}
            onChange={makeCategoryChange('Sports')}
          />
          Sports
        </label>
        <label>
          <p>💵</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Business')}
            onChange={makeCategoryChange('Business')}
          />
          Business
        </label>
        <label>
          <p>🏳️</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Nation')}
            onChange={makeCategoryChange('Nation')}
          />
          Nation
        </label>
      </form>
    </div>
  );
}

export default Preferences;
