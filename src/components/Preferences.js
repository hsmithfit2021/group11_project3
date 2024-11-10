import { useContext } from 'react';
import { useEffect } from 'react';
import UserContext from './User';
import '../style/Preferences.css';

function Preferences({tf, fn}) {
  const { currentPreferences, setCurrentPreferences } = useContext(UserContext);

  function MakeCategoryChange(category) {
    let updatedCategories;
  
    if (!currentPreferences.categories.includes(category)) {
      updatedCategories = currentPreferences.categories;
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

  if (!tf) {
    return null;
  }
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
            onChange={MakeCategoryChange('Science')}
          />
          Science
        </label>
        <label>
          <p>⚙️</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Technology')}
            onChange={MakeCategoryChange('Technology')}
          />
          Technology
        </label>
        <label>
          <p>💊</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Health')}
            onChange={MakeCategoryChange('Health')}
          />
          Health
        </label>
        <label>
          <p>🌎</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('World')}
            onChange={MakeCategoryChange('World')}
          />
          World
        </label>
        <label>
          <p>🍿</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Entertainment')}
            onChange={MakeCategoryChange('Entertainment')}
          />
          Entertainment
        </label>
        <label>
          <p>🏆</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Sports')}
            onChange={MakeCategoryChange('Sports')}
          />
          Sports
        </label>
        <label>
          <p>💵</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Business')}
            onChange={MakeCategoryChange('Business')}
          />
          Business
        </label>
        <label>
          <p>🏳️</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Nation')}
            onChange={MakeCategoryChange('Nation')}
          />
          Nation
        </label>
      </form>
    </div>
  );
}

export default Preferences;
