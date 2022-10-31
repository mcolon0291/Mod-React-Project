// import styled from 'styled-components';
import {useState} from 'react';
import {Navigate, useNavigate} from 'react-router-dom'

function Search () {

const [input, setInput] = useState('');
const Navigate = useNavigate();

const submitHandler = (e) => {
    e.preventDefault();
    Navigate("/searched/" + input)
}

    return (
        
    <div className="searchForm">
     <form onSubmit={submitHandler}>
    <br />
     <input onChange={(e) => setInput(e.target.value)} type ="text" value={input}/> 
     <input className ="searchInput" input type ="submit" value= "Search"/>
  
   </form>
  </div>
  )
 }

export default Search