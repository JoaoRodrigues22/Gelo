import { useState } from 'react'
import './signup.css'

import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

export default function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Logo do Sistema de Chamados"/>
                </div>

                <form>
                    <h1> Nova Conta </h1>

                    <input type="text" placeholder="Seu Nome" value={name} onChange={(e) => setName(e.target.value) }/>
                    <input type="text" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value) }/>
                    <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value) }/>
                    
                    <button type='submit'>Cadastrar</button>

                </form>

                <Link to="/register"> Faça Login </Link>

            </div>
        </div>
    )
}