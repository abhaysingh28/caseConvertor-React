import {useState} from 'react';
import app from './App.css';

const App = () => {
  const [Text, setText] = useState('');
  const upperCase =(e)=>{
    const uper =Text.toUpperCase()
    setText(uper)
  }

  const loweCase =(e)=>{
    const lower = Text.toLowerCase()
    setText(lower)
  }

  const Length =(e)=>{
    const leng =(Text.length)
    setText(leng)
  }

  const changeHandler=(e)=>{
    setText(e.target.value)
  }

  return (
    <div>
      <h1 className='h1'>Case Convertor</h1>
      <input className='inp' type="text" value={Text} onChange={changeHandler} />
      <button className='butn' onClick={upperCase}>UperCase</button>
      <button className='butn' onClick={loweCase}>LowerCase</button>
      <button className='butn' onClick={Length}>Find LenGth</button>
    </div>
  );
}

export default App;

