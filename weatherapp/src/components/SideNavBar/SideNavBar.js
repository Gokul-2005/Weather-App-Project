import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { ApiDataContext } from '../../App'
import WeatherImg from '../WeatherImg/WeatherImg'
import style from './SideNavBar.module.css'
export default function SideNavBar() {
  const {apiData} = useContext(ApiDataContext);
  const {setApiData} = useContext(ApiDataContext);
  const {tempType} = useContext(ApiDataContext);
  const {setShowSearchBar} = useContext(ApiDataContext);
  const {cityName} = useContext(ApiDataContext);
  const getCurrentLocation = () => {
    
    navigator.geolocation.getCurrentPosition((response)=>{      
      getCityName(response.coords.latitude,response.coords.longitude)
    }); 
  }

  const getCityName = async(latitude,longitude) =>{
    try {
      const response = await axios(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=9e3850adbf7b467684fd4bf111c7fb22`);
      const userResponse = response.data;
      if(cityName===''){
        getCurrentWeather(userResponse.features[0].properties.county)
      }
      else{
        getCurrentWeather(cityName)
      } 
    }
      catch (errors) {
      console.error(errors);
    }
  }

  const getCurrentWeather = async(city) => {
    try {
      const response = await axios.post(`https://api.weatherapi.com/v1/forecast.json?key=2dac382549a64918a0672543230702&q=${city}&days=6`);
      const userResponse = response.data;
      setApiData(userResponse);
    }
      catch (errors) {
        alert('Please Enter Correct City Name')
      console.error(errors);
    }
  }

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((response)=>{      
      getCityName(response.coords.latitude,response.coords.longitude)
    }); 
  },[])

  // useEffect(()=>{
  //   getCurrentWeather(cityName);
  // },[tempType])

  const convertDate = () => {
    const dateString = "2023-02-07";
    const date = new Date(dateString);
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return(formattedDate);
  }

  return (
    
      <div className={style.SideNavBar}>
        {
          apiData ?(<><div className={style.searchBar}> <button onClick={() => setShowSearchBar(true)} className={style.searchPlace}> Seach for places</button> <button onClick={getCurrentLocation} className={style.AutoLocation}><i className="fa-solid fa-location-crosshairs"></i></button> </div>
          <div className={style.WeatherImgBar} > <WeatherImg apiData={apiData} /> </div>
          <div className={style.tempBar}>{tempType==='C'?apiData.current.temp_c:apiData.current.temp_f}{tempType==='C'?'℃':'°F'}</div>
          <div className={style.LocationBar}>
            <h5>{apiData.current.condition.text}</h5>
            <h6> Today &nbsp;&nbsp; • &nbsp;&nbsp; {convertDate(apiData.current.last_updated)}</h6>
            <h6><i className="fa-solid fa-location-dot"></i> &nbsp; {apiData.location.name}</h6>
          </div></>)
          :null
        }
    </div>
    
    
  )
}
