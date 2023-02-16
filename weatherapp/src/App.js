import { useState,createContext } from 'react';
import style from './App.module.css'
import Body from './components/Body/Body';
import SearchSideBar from './components/SearchSideBar/SearchSideBar';
import SideNavBar from './components/SideNavBar/SideNavBar';

export const ApiDataContext = createContext(null);

function App() {
  const [tempType,setTempType] = useState('C');
  const [apiData,setApiData] = useState('');
  const [showSearchBar , setShowSearchBar] = useState(false);
  const [cityName,setCityName] =useState('');
  return (
    
    <div className={style.App}>
      <ApiDataContext.Provider value={{apiData,setApiData,tempType,setTempType,setShowSearchBar,cityName,setCityName}} >
        {showSearchBar ? <SearchSideBar/> : <SideNavBar />}
    <Body />
    </ApiDataContext.Provider>
    </div>
  );
}

export default App;
