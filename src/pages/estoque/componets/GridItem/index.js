import React from "react";


const GridItem = ({ item }) => {
    return (
      <>
      <tr>
      <td >{item.desc}</td>
      <td>{item.amount}</td>
      </tr>
      <td>
      {item.expense}
      </td>
      <td onClick= {item.id} >
      </td>
      </>
    );
    
  };
  
  export default GridItem;
  