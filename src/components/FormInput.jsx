import React from 'react'
import "./formInput.css"
export const FormInput = (props) => {
  const {label,errorMesage,onChange,id,...inputProps} = props;
  return (
    <div className="formInput">
  
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} ></input>    
      <span>{errorMesage}</span>
    </div>
  )
}
