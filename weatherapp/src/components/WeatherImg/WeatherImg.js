import React from 'react'
import style from './WeatherImg.module.css'
export default function WeatherImg(props) {
  return (
    props.apiData ?(

    props.apiData.current.condition.text === 'Sunny' ?<img className={style.WeatherImg}  src='/Assets/Clear.png' alt=''/>:
    (
    props.apiData.current.condition.text === 'Partly cloudy' ?  <img className={style.WeatherImg}  src='/Assets/LightCloud.png' alt=''/> :
    (
    props.apiData.current.condition.text === 'Cloudy' ?  <img className={style.WeatherImg}  src='/Assets/HeavyCloud.png' alt=''/> :
    (
    props.apiData.current.condition.text === 'Light rain' ?  <img className={style.WeatherImg}  src='/Assets/LightRain.png' alt=''/> : 
    (
    (props.apiData.current.condition.text).includes('sleet') ?  <img className={style.WeatherImg}  src='/Assets/Sleet.png' alt=''/> :
    (
    (props.apiData.current.condition.text).includes('shower') ? <img className={style.WeatherImg}  src='/Assets/Shower.png' alt=''/> :
    (
    (props.apiData.current.condition.text).includes('Heavy rain') ? <img className={style.WeatherImg}  src='/Assets/HeavyRain.png' alt=''/> :
    (
    (props.apiData.current.condition.text).includes('thunder') ? <img className={style.WeatherImg}  src='/Assets/Thunderstrom.png' alt=''/>:
    (
    (props.apiData.current.condition.text).includes('snow') ? <img className={style.WeatherImg}  src='/Assets/Snow.png' alt=''/>:
    (
    (props.apiData.current.condition.text).includes('pellets')||props.apiData.current.condition.text === 'Mist' ? <img className={style.WeatherImg}  src='/Assets/Hail.png' alt=''/>:(
    (props.apiData.current.condition.text).includes('Clear') ? <img className={style.WeatherImg}  src='/Assets/Clear.png' alt=''/> :null 
    )  
    )  
    )
    ) 
    ) 
    )
    )  
    )
    )
    )
    ):null
  )
}
