import React, { useState } from "react";
import Grid from "../Grid";
import './styles.css'

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);
  
    const generateID = () => Math.round(Math.random() * 1000);
  
    const handleSave = () => {
      if (!desc || !amount) {
        alert("Informe o Produto e a Quantidade!");
        return;
      } else if (amount < 1) {
        alert("O valor tem que ser positivo!");
        return;
      }
  
      const transaction = {
        id: generateID(),
        desc: desc,
        amount: amount,
        expense: isExpense,
      };
  
      handleAdd(transaction);
  
      setDesc("");
      setAmount("");
    };
    return (
      <>
        <div className="Container">
            
            <label htmlFor="Descrição">Produto</label>
            <input 
            className="InputContent" 
            type="text"
            value={desc} onChange={(e) => setDesc(e.target.value)} 
            />

            <label htmlFor="Valor">Quantidade</label>
            <input 
            className="InputContent" 
            type="text"
            value={amount} onChange={(e) => setAmount(e.target.value)} 
            />
            <label htmlFor="">Entrada</label>
            <input className="RadioGroup" type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}/>

            <label htmlFor="">Saida</label>
            <input className="RadioGroup" type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}/>

            <button className="Button" onClick={handleSave}>ADICIONAR</button>
            



        </div>
        <Grid itens={transactionsList} setItens={setTransactionsList} />
        </>
    );
}
    export default Form;