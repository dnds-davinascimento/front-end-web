import React,{useState} from "react";
import { useNavigate ,Link  } from "react-router-dom";

import api from '../../services/Api';
import './index.css';

export default function Login() {
  const [nome , setNome ] =useState('');
  const [senha , setSenha ] =useState('');
  
  

  const navigate = useNavigate ()


  async function handleSumit(event){event.preventDefault()

  const response = await api.post ('/sessions', {nome,senha  })

  const { _id} = response.data;

  localStorage.setItem('user', _id);

  navigate('/home')
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
      
      <label htmlFor="senha">Senha *</label>
      <input 
        id="senha" 
        type="password" 
        placeholder ="Seu Senha"
        value={senha}
        onChange={event => setSenha(event.target.value) } 
      />
      
     

      <button className='btn' type='subimit'>Entrar</button>
      
      
      
    </form>
    
   </div>
   )
 }