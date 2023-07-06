import React,{ useState } from 'react'

export default function TextForm(props) {

    

    const captureText=(event)=> {
        setText(event.target.value);
    }

    const toUpCase=()=>{
       let newText= text.toUpperCase();
       setText(newText);
       props.showAlert("Text Changed to capital" ,"success")
    }
   const  toLwCase=()=>{
        let lwCase=text.toLowerCase();
        setText(lwCase);
        props.showAlert("Text Changed to small" ,"success")
    }

    const revTxt=()=>{
        let revertedText=text.split("").reverse().join("");
        setText(revertedText);
        props.showAlert("Text Reversed" ,"success")
    }
    const [text,setText]= useState('');

  return ( 
    <>

<div className="mb-3" style={{color:props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>
  <textarea className="form-control" id="myBox" rows="10" onChange={captureText} value={text} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}></textarea>
  <button type="button" className="btn btn-primary my-2" onClick={toUpCase}>Upper Case</button>
  <button type="button" className="btn btn-primary my-2 mx-2" onClick={toLwCase}>Lower Case</button>
  <button type="button" className="btn btn-primary my-2 mx-2" onClick={revTxt}>Reverse Text</button>
</div>
<div className="container" style={{color:props.mode==='light'?'black':'white'}}>
    <p>{text.length} characters and {text.split(" ").length-1} words</p>
    <h2>Preview</h2>
    <p>{text?text:'Enter the text to see the preview'}</p>
</div>
    </> 
  )
}

