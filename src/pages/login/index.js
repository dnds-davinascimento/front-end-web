import React,{useState} from "react";
import api from '../../services/Api';
import './index.css';

export default function Login() {
  const [nome , setNome ] =useState('');
  const [ email , setEmail ]= useState('');
  const [ contato , setcontato ]= useState('');


  async function handleSumit(event){event.preventDefault()
  const response = await api.post ('/sessions', {nome,email ,contato })
  const { _id} = response.data;

  localStorage.setItem('user', _id);
  console.log(_id);
}
  return (
   <div className="login">
    <p>
      Ofereça <strong>produtos</strong> para vendedores e encontre <strong>Clientes</strong> para sua empresa
    </p>
        
    <form onSubmit={handleSumit}>
      <label htmlFor="nome">Nome *</label>
      <input 
        id="nome" 
        type="nome" 
        placeholder ="Seu Nome"
        value={nome}
        onChange={event => setNome(event.target.value) } 
      />
      
      <label htmlFor="email">Email *</label>
      <input 
        id="email" 
        type="email" 
        placeholder ="Seu Email"
        value={email}
        onChange={event => setEmail(event.target.value) } 
      />
      
      <label htmlFor="contato">Contato *</label>
      <input 
        id="contato" 
        type="contato" 
        placeholder ="Seu Contato"
        value={contato}
        onChange={event => setcontato(event.target.value) } 
      />

      <button className='btn' type='subimit'>Entrar</button>
    </form>
   </div>
   )
 }