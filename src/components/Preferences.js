import '../style/Preferences.css';

function Preferences({fn}) {
    const xButtonClick = () => {
        fn(false);
      }
    return (
        <div class="flex-center">
            <form class = "preference-window">
                <header>
                    <button onClick={xButtonClick}>X</button>
                    <p>
                        Select news categories to fine-tune your feed.
                    </p>
                </header>
                <label>
                    <p>🧪</p>
                    <input type="checkbox"/>
                    Science
                </label>
                <label>
                    <p>⚙️</p>
                    <input type="checkbox"/>
                    Technology
                </label>
                <label>
                    <p>💊</p>
                    <input type="checkbox"/>
                    Health
                </label>
                <label>
                    <p>🌎</p>
                    <input type="checkbox"/>
                    World
                </label>
                <label>
                    <p>🍿</p>
                    <input type="checkbox"/>
                    Entertainment
                </label>
                <label>
                    <p>🏆</p>
                    <input type="checkbox"/>
                    Sports
                </label>
                <label>
                    <p>💵</p>
                    <input type="checkbox"/>
                    Business
                </label>
                <label>
                    <p>🏳️</p>
                    <input type="checkbox"/>
                    Nation
                </label>
            </form>
        </div>
    );
  }

  export default Preferences;