import React, { useState } from 'react'

export default function About() {
const[myTheme,setTheme]=useState(
  {color:'black',
backgroundColor:'white'}
);

const toggleTheme=()=>{if (myTheme.color==='black'){  
const darkTheme=({
    backgroundColor:'black',
    color:'white'
  });
  setTheme(darkTheme);
  let newtxt='Light Theme'
  setBtnTxt(newtxt);
}else if(myTheme.color==='white'){
setTheme({
  backgroundColor:'white',
  color:'black'
})
let newtxt2='Dark Theme'
setBtnTxt(newtxt2);

}

}

const [btnTxt,setBtnTxt]=useState('Dark Theme')



  



  return (
   <div style={myTheme}>
   <h1>About Us</h1>
<div className="accordion" id="accordionExample" style={myTheme}>
  <div className="accordion-item" style={myTheme}>
    <h2 className="accordion-header">
      <button className="accordion-button"style={myTheme} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show"style={myTheme}  data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myTheme}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myTheme}>
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myTheme} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myTheme}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myTheme}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myTheme} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" style={myTheme} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myTheme}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <button type="button" class="btn btn-dark my-2" onClick={toggleTheme}>{btnTxt}</button>
</div>
   
   </div>
  )
}
