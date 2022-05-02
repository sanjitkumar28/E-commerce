import React from 'react'
import './categoryitem.styles.scss'
const Categoryitem=(props)=>{
  return (
    <div className="category-container">
            <div className="background-image" style={
                  {
                    backgroundImage:`url(${props.image})`
                  }
                }/>
                <div className="category-body-container">
                <h2>{props.title}</h2>
                <h2>Shop now</h2>
                </div>
              </div> 
  )
}
export default Categoryitem
