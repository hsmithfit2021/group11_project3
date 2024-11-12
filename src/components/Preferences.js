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
          <p>{currentPreferences.categories.includes('SCIENCE') ? "✅": "🧪"}</p>
          <input
            type="checkbox"
            defaultChecked={currentPreferences.categories.includes('SCIENCE')}
            onClick={() => MakeCategoryChange('SCIENCE')}
          />
          Science
        </label>
        <label>
          <p>{currentPreferences.categories.includes('TECHNOLOGY') ? "✅": "⚙️"}</p>
          <input
            type="checkbox"
            defaultChecked={currentPreferences.categories.includes('TECHNOLOGY')}
            onClick={() => MakeCategoryChange('TECHNOLOGY')}
          />
          Technology
        </label>
        <label>
          <p>{currentPreferences.categories.includes('HEALTH') ? "✅": "💊"}</p>
          <input
            type="checkbox"
            defaultChecked={currentPreferences.categories.includes('HEALTH')}
            onClick={() => MakeCategoryChange('HEALTH')}
          />
          Health
        </label>
        <label>
          <p>{currentPreferences.categories.includes('WORLD') ? "✅": "🌎"}</p>
          <input
            type="checkbox"
            defaultChecked={currentPreferences.categories.includes('WORLD')}
            onClick={() => MakeCategoryChange('WORLD')}
          />
          World
        </label>
        <label>
          <p>{currentPreferences.categories.includes('ENTERTAINMENT') ? "✅": "🍿"}</p>
          <input
            type="checkbox"
            defaultChecked={currentPreferences.categories.includes('ENTERTAINMENT')}
            onClick={() => MakeCategoryChange('ENTERTAINMENT')}
          />
          Entertainment
        </label>
        <label>
          <p>{currentPreferences.categories.includes('SPORTS') ? "✅": "🏆"}</p>
          <input
            type="checkbox"
            defaultChecked={currentPreferences.categories.includes('SPORTS')}
            onClick={() => MakeCategoryChange('SPORTS')}
          />
          Sports
        </label>
        <label>
          <p>{currentPreferences.categories.includes('BUSINESS') ? "✅": "💵"}</p>
          <input
            type="checkbox"
            defaultChecked={currentPreferences.categories.includes('BUSINESS')}
            onClick={() => MakeCategoryChange('BUSINESS')}
          />
          Business
        </label>
        <label>
          <p>{currentPreferences.categories.includes('NATION') ? "✅": "🏳️"}</p>
          <input
            type="checkbox"
            defaultChecked={currentPreferences.categories.includes('NATION')}
            onClick={() => MakeCategoryChange('NATION')}
          />
          Nation
        </label>
      </form>
    </div>
  );
}

export default Preferences;
