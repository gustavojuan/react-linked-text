
import { useState } from 'react';
import './App.css';


function App() {

  const [username, setUsername ] = useState('XXX');
  const [color, setColor ] = useState('#000000');

  return (
  <>

      <h1 style={{color:color}}> Hello {username}</h1>  



      <div>
        <label htmlFor='username'>Username: </label>
        <input type='text' name="username" value={username}  onChange={ (e)=>{setUsername(e.target.value)}} /> 
      </div>

      <div>
        <label htmlFor='color'>Color: </label>
        <input type='color' name="color" value = {color}  onChange={ (e)=>{setColor(e.target.value)} }/>
      </div>


     
  </> 
  );
}

export default App;
