import React,{useContext, useRef} from 'react'
import style from './SearchSideBar.module.css'
import { ApiDataContext } from '../../App'
export default function SearchSideBar() {
  const inputRef = useRef(null)
  const {setShowSearchBar} = useContext(ApiDataContext);
  const {setCityName} = useContext(ApiDataContext);

  const handleCityName = () => {
    setCityName(inputRef.current.value);
    setShowSearchBar(false)
  }

  return (
    <div className={style.SearchSideNavBar}>
      <button className={style.closeButton} onClick={() => setShowSearchBar(false)} ><i className="fa-solid fa-xmark"></i></button>
      <div className={style.searchBarMain}> <input type={'text'} ref={inputRef} className={style.cityInput}/> <button className={style.searchButton} onClick={handleCityName} >Search</button> </div>
    </div>
  )
}
