import { useState } from 'react'
import './App.css'
import show from "./assets/show.png"
import hide from "./assets/hide.png"

function App() {
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState('')
  const [showPassword, setshowPassword] = useState(false)

  const calculateStrength=(pwd)=>{
    if(!pwd){
      setStrength("")
      return
    }

    const upperCase = /[A-Z]/.test(pwd);
    const lowerCase = /[a-z]/.test(pwd);
    // const number = /\d/.test(pwd);
    const number = /[0-9]/.test(pwd);
    const specialChar = /[!@#$%^&*(),.?":|<>]/.test(pwd);

    if(pwd.length < 8){
      setStrength("weak");
    }
    else if(upperCase && lowerCase && number && specialChar){
      setStrength("strong");
    }
    else if((upperCase && lowerCase) || (lowerCase && number) ||(upperCase && number) || (lowerCase && specialChar) || (upperCase && specialChar)){
      setStrength("moderate");
    }
    else{
      setStrength("weak");
    }
  }

  const handleInputChange=(e)=>{
    const pwd=e.target.value;
    setPassword(pwd);
    calculateStrength(pwd);
  }

  const toggleShowPassword=()=>{
    setshowPassword((prev)=>!prev)
  }
  
  return (
    <div className="App">
      <h1>Password Strength Checker</h1>
      <div className='input-button'>
        <input 
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handleInputChange}
          placeholder='Enter your password'
        />
        <button
          className='togglebtn'
          onClick={toggleShowPassword}
        >
          <img
            className='toggleImage'
            src={showPassword ? hide : show}
            alt=""
          />
        </button>
      </div>
      <div className={strength}>
        {strength && <p>Password strength: {strength}</p>}
      </div>
    </div>
  )
}

export default App
