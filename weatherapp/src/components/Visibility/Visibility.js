import React from 'react'
import style from './Visibility.module.css'
export default function Visibility(props) {
  return (
    <div className={style.Visibility}>
      <h3 className={style.visHead}>Visibility</h3>
      <h4 className={style.visMain}>{props.obj.vis_miles}<span className={style.visSpan}>miles</span></h4>
    </div>
  )
}
