import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';

const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("");

  console.log('test:',todo);

  return (
    <div className="App">
      <span className='heading'>Jmcunst</span>
      <InputFeild todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
