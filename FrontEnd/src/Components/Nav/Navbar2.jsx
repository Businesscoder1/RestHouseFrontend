import React from 'react'
import './Navbar2.css'
import ashok from '../../assets/ashok.png'
import kendriya from '../../assets/kendriya-sainik-flag.png'
const Navbar2 = ({login,register}) => {
  return (
    
    <div>
        <section>
        <div className='lion'>
        <img id="lion" src={ashok} alt="" />
        <h3 >Department of Sainik Welfare</h3>
        </div>

        <div>
            <img id='logo' src={kendriya} alt="" />
            <section className='going'>
            <button id='login' onClick={login}>Login</button>
            <button id='register' onClick={register}>Register</button>
            </section>
            
        </div>
        </section>
        
        
    </div>
    
  )
}

export default Navbar2