import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [darkmode,setDarkmode]=useState(false);
  return (
    <>
<Navbar title="TextUtils" aboutText="About TextUtils"/>
<div className="container my-3">           
<About/>
<TextForm heading ="Enter the text to analyse"/>
</div>
    </>
  );
}

export default App;
