import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        console.log("lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{      //this function runs onclick and we get an event object for free
        console.log("on change!")
        setText(event.target.value);      //makes textarea typable.
    }
    const handleClearClick=()=>{
        console.log("clear!")
        let newTxt=' ';
        setText(newTxt);
    }
    const handleCopy=()=>{
        console.log("I am copy");
        var text=document.getElementById('mybox');
        text.select();
        
        navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState('Enter Text here');
   // setText("New Text"); //correct way to change state
  return (
    <div>
<h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="mybox" className="form-label">Example textarea</label>
  <textarea className="form-control" id="mybox" value={text} rows="8" onChange={handleOnChange}></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert into uppercase</button>
<button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert To LowerCase</button>
<button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button> 
<button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
    <div className="container my-2" >
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>

    </div>

  )
}
