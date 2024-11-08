import { createContext } from 'react';
import { useState } from 'react';

const UserContext = createContext({});

function UserProviderWrapper({ children }) {
  const [currentPreferences, setCurrentPreferences] = useState({ categories: [] });

  return (
    <UserContext.Provider value={{ currentPreferences, setCurrentPreferences }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProviderWrapper };
export default UserContext;
