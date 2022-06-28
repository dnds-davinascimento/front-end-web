import React from "react";
import './styles.css'

const ResumeItem = ({ title,  value }) => {
  return (
    <div className="Container">
      
      <div className="Header">
         
          <div className="HeaderTitle" >
          {title}
          </div >
         
          <div className="total" >{value}</div >
      </div>
      
    </div >
  );
};

export default ResumeItem;