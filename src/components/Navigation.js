import '../style/Navigation.css';
import {useState} from "react";
import Preferences from './Preferences';

function Navigation() {
    const [showPref, setShowPref] = useState(false);
    const prefButtonClick = () => {
      setShowPref(!showPref);
    }
    return (
        <div>
          <div class = "flex-right">
            <button class="pref-button" onClick={prefButtonClick}>
              Preferences
            </button>
          </div>
          {showPref && <Preferences fn = {setShowPref}/>}
        </div>
    );
}
export default Navigation;