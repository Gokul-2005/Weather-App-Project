import React,{useContext} from 'react'
import {ApiDataContext} from '../../App'
import style from './DailyTemp.module.css'
export default function DailyTemp(props) {
  const {apiData} = useContext(ApiDataContext);
  const {setApiData} = useContext(ApiDataContext);
  const {tempType} = useContext(ApiDataContext);
  const convertDate = (todayDate) => {
    const dateString = todayDate;
    const date = new Date(dateString);
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return(formattedDate);
  }

  return (
    <div className={style.dailyTemp}>
      {
        apiData ? (<>
        <h3>{convertDate(props.obj.date)}</h3>
      {
        apiData ? (apiData.current.condition.text === 'Sunny' ?<img className={style.DailyWeatherImg}  src='/Assets/Clear.png' alt=''/>:
        (
        apiData.current.condition.text === 'Partly cloudy' ?  <img className={style.DailyWeatherImg}  src='/Assets/LightCloud.png' alt=''/> :
        (
        apiData.current.condition.text === 'Cloudy' ?  <img className={style.DailyWeatherImg}  src='/Assets/HeavyCloud.png' alt=''/> :
        (
        apiData.current.condition.text === 'Light rain' ?  <img className={style.DailyWeatherImg}  src='/Assets/LightRain.png' alt=''/> : 
        (
        (apiData.current.condition.text).includes('sleet') ?  <img className={style.DailyWeatherImg}  src='/Assets/Sleet.png' alt=''/> :
        (
        (apiData.current.condition.text).includes('shower') ? <img className={style.DailyWeatherImg}  src='/Assets/Shower.png' alt=''/> :
        (
        (apiData.current.condition.text).includes('Heavy rain') ? <img className={style.DailyWeatherImg}  src='/Assets/HeavyRain.png' alt=''/> :
        (
        (apiData.current.condition.text).includes('thunder') ? <img className={style.DailyWeatherImg}  src='/Assets/Thunderstrom.png' alt=''/>:
        (
        (apiData.current.condition.text).includes('snow') ? <img className={style.DailyWeatherImg}  src='/Assets/Snow.png' alt=''/>:
        (
        (apiData.current.condition.text).includes('pellets')||apiData.current.condition.text === 'Mist' ? <img className={style.DailyWeatherImg}  src='/Assets/Hail.png' alt=''/>:(
        (apiData.current.condition.text).includes('Clear') ? <img className={style.DailyWeatherImg}  src='/Assets/Clear.png' alt=''/> :null 
        )  
        )  
        )
        ) 
        ) 
        )
        )  
        )
        )
        )):null 
      }
      <h4> {tempType==='C'?props.obj.day.mintemp_c:props.obj.day.mintemp_f} {tempType==='C'?'°C':'°F'}<span>{tempType==='C'?props.obj.day.maxtemp_c:props.obj.day.maxtemp_f} {tempType==='C'?'°C':'°F'}</span> </h4>
      </>) :null
      }
      
    </div>
  )
}
