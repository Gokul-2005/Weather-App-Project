import React from 'react'
import style from './Humidity.module.css'
export default function Humidity(props) {
  return (
    <div className={style.Humidity}>
      <h3 className={style.humHead}>Humidity</h3>
      <h4 className={style.humMain}>{props.obj.humidity}<span className={style.humSpan}>%</span></h4>
    </div>
  )
}
