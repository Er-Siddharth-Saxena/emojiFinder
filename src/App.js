import { useState } from 'react';
import './App.css';

const emoji=[
  {a:'☺️',name:'smile'},
  {a:'😂',name:'funny'},
  {a:'🥹',name:'emotional'},
  {a:'😇',name:'elated'},
  {a:'🧐',name:'doubt'},
  {a:'😏',name:'smirk'}
]

function App() {
  const [first,setFirst]=useState('');
  const [second,setSecond]=useState([]);

  function show(e){
    setFirst(e.target.value);
  }
  const search=second.filter((k)=>{
    return k.name.toLowerCase().includes(first.toLowerCase());
  })
  function newf(){
    setSecond(emoji);
  }
  function pqr(){
    setSecond([]);
  }
  
  return (
  <>
  <div class='abc'>
  <input className='inputsize' placeholder='search' type='text' onClick={newf} onChange={show}></input>
  <input  type='button' value='*' onClick={pqr} />
  
    {/* <button onClick={pqr}>*</button> */}
    
   
   
    {search.map((element,index)=>(
     <span style={{fontSize:'30px'}}>{element.a}</span>
   
      
     
      
  ))}
  </div>
  

  
  </>
  );
}


export default App;
