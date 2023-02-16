import React from 'react'
import style from './AirPressure.module.css'
export default function AirPressure(props) {
  return (
    <div className={style.AirPressure}>
      <h3 className={style.APHead}>Air Pressure</h3>
      <h4 className={style.APMain}>{props.obj.pressure_mb}<span className={style.APSpan}>mb</span></h4>
    </div>
  )
}
