import React from "react";
import ResumeItem from "../ResumeItem";
import './styles.css'


  const Resume = ({inicial, income, expense, total }) => {
    return (
      
        <div className="Container">
            <ResumeItem
          title="Inicial"
         
          value={inicial}
        />
        <ResumeItem
          title="Entradas"
         
          value={income}
        />
        <ResumeItem
          title="Saídas"
          
          value={expense}
        />
        
        <ResumeItem title="Total"  value={total} />

        </div>
       
    );
  };
  
  export default Resume;
  