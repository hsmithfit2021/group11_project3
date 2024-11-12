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
          <p>{currentPreferences.categories.includes('Science') ? "✅": "🧪"}</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Science')}
            onClick={() => MakeCategoryChange('Science')}
          />
          Science
        </label>
        <label>
          <p>{currentPreferences.categories.includes('Technology') ? "✅": "⚙️"}</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Technology')}
            onClick={() => MakeCategoryChange('Technology')}
          />
          Technology
        </label>
        <label>
          <p>{currentPreferences.categories.includes('Health') ? "✅": "💊"}</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Health')}
            onClick={() => MakeCategoryChange('Health')}
          />
          Health
        </label>
        <label>
          <p>{currentPreferences.categories.includes('World') ? "✅": "🌎"}</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('World')}
            onClick={() => MakeCategoryChange('World')}
          />
          World
        </label>
        <label>
          <p>{currentPreferences.categories.includes('Entertainment') ? "✅": "🍿"}</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Entertainment')}
            onClick={() => MakeCategoryChange('Entertainment')}
          />
          Entertainment
        </label>
        <label>
          <p>{currentPreferences.categories.includes('Sports') ? "✅": "🏆"}</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Sports')}
            onClick={() => MakeCategoryChange('Sports')}
          />
          Sports
        </label>
        <label>
          <p>{currentPreferences.categories.includes('Business') ? "✅": "💵"}</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Business')}
            onClick={() => MakeCategoryChange('Business')}
          />
          Business
        </label>
        <label>
          <p>{currentPreferences.categories.includes('Nation') ? "✅": "🏳️"}</p>
          <input
            type="checkbox"
            checked={currentPreferences.categories.includes('Nation')}
            onClick={() => MakeCategoryChange('Nation')}
          />
          Nation
        </label>
      </form>
    </div>
  );
}

export default Preferences;
