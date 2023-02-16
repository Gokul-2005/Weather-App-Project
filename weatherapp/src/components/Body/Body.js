import React,{useContext, useEffect, useRef, useState} from 'react'
import AirPressure from '../AirPressure/AirPressure'
import DailyTemp from '../DailyTemp/DailyTemp'
import Humidity from '../Humidity/Humidity'
import Visibility from '../Visibility/Visibility'
import WindStatus from '../WindStatus/WindStatus'
import style from './Body.module.css'
import { ApiDataContext } from '../../App'
export default function Body() {
  const tempTypeParentRef = useRef(null);
  const {apiData} = useContext(ApiDataContext);
  const {setApiData} = useContext(ApiDataContext);
  const {tempType} = useContext(ApiDataContext);
  const {setTempType} = useContext(ApiDataContext);
  const CheckedStyleForTempButton = {
    backgroundColor : 'white',
    color : '#585676',
  }
  const normalStyleForTempButton = {
    backgroundColor : '#585676',
    color : 'white',
  }
  const handleTempTypeChange = (ele,temp) => {
    console.log(temp);
    setTempType(temp);
    if(tempTypeParentRef.current.children[0]===ele.target){
      ele.target.style.backgroundColor='white';
      ele.target.style.color='#585676'
      tempTypeParentRef.current.children[1].style.color='white';
      tempTypeParentRef.current.children[1].style.backgroundColor='#585676'
    }
    else{
      ele.target.style.backgroundColor='white';
      ele.target.style.color='#585676'
      tempTypeParentRef.current.children[0].style.color='white';
      tempTypeParentRef.current.children[0].style.backgroundColor='#585676'
    }
  }

  return (
    <div className={style.Body}>
      {
        apiData ? (
        <>
        <div ref={tempTypeParentRef} className={style.heatOptBar}>
          <button className={style.celciusButton} onClick={(event) => handleTempTypeChange(event,'C')}>℃</button>
          <button className={style.fahrenheitButton} onClick={(event) => handleTempTypeChange(event,'F')} >℉</button>
        </div>
        <div className={style.dailyWeatherBar}><DailyTemp obj={apiData.forecast.forecastday[0]} /><DailyTemp obj={apiData.forecast.forecastday[1]} /><DailyTemp obj={apiData.forecast.forecastday[2]} /><DailyTemp obj={apiData.forecast.forecastday[3]} /><DailyTemp obj={apiData.forecast.forecastday[4]} /> </div>
        <h1>Today’s Hightlights</h1> 
        <div className={style.TodayWeatherDetailBar}> <WindStatus obj={apiData.current}/> <Humidity obj={apiData.current} /> <Visibility obj={apiData.current} />  <AirPressure obj={apiData.current} /> </div>  
        </>
        ):null
      }
    </div>
  )
}
