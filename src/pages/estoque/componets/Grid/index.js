import React from "react";
import GridItem from "../GridItem";
import './styles.css'

const Grid = ({ itens, setItens }) => {
    const onDelete = (ID) => {
      const newArray = itens.filter((transaction) => transaction.id !== ID);
      setItens(newArray);
      localStorage.setItem("transactions", JSON.stringify(newArray));
    };
    return(
        <table className="Table">
    <thead>
        <tr>
           
            <th className="Th">Produto</th>
            <th className="Th">Quantidade</th>
            <th className="Th">Tipo</th>
        </tr>
        <tbody className="tbody">
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
        </tbody>
    </thead>
</table>
    );

    };



export default Grid;