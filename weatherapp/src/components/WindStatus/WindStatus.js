import React from 'react'
import style from'./WindStatus.module.css'
export default function WindStatus(props) {
  return (
    <div className={style.WindStatus}>
      <h3 className={style.wsHead}>Wind status</h3>
      <h4 className={style.wsMain}> {props.obj.wind_mph} <span className={style.wsSpan}>mph</span></h4>
      <h5 className={style.wsDirection}>{
        props.obj.wind_degree >0 && props.obj.wind_degree <=90 ? 'North East' : (
        props.obj.wind_degree >90 && props.obj.wind_degree <=180 ? 'South East' : (
        props.obj.wind_degree >180 && props.obj.wind_degree <=270 ? 'South West' : (
        props.obj.wind_degree >270 && props.obj.wind_degree <=359 ? 'North West' : null
        )
        )
        ) 

      }</h5>
    </div>  
  )
}
