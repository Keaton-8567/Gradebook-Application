import React, {useState} from 'react';
import "./login_padge.css";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const performValidation = () => {
        let username_var = username.toString();
        let password_var = password.toString();

        

        return username.length > 0 && password.length > 0;
    };
  
    const handleLogin = (event) => {
      event.preventDefault();
      if (performValidation()) {
        console.log('Login successful!');
      } else {
        console.log('Please fill in both fields');
      }
    };
    
    return (
        <div className='Login'>
            <h1>Gradebook</h1>
            <form onSubmit={handleLogin} className='Login_Field'>
                <label className='Username_Field'>
                    <h3>Username : </h3>  
                    <input className='Username_text_box' type="text" value={username} onChange={ (event) => setUsername(event.target.value)} />
                </label>

                <br />

                <label className='Password_Field'>
                    <h3 className='Password_text'>Password : </h3>   
                    <input className='Password_text_box' type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}