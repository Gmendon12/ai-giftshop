import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const[active, inActive] = useState(false)
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)

  return (
    <div id='navbar'>
       <div id='navbar-container'>
        <div id='navbar-content1'>
            <div id='company-name'>G</div>
            
            <div class='dropdown'>
              <a onClick={()=>setOpen(!open)}>Developers</a>

              {open && <div className='menu'>
                 <Link to='/docs'><a>Docs</a></Link>
                 
                 <Link to='/generic'><a>Generic Explorer</a></Link>

                 <Link to='/usecases'><a>Use Cases</a></Link>
                <a>GitHub</a>
               </div>}
                 
             
            </div>

            <div class='dropdown'>
              <a onClick={()=>setOpen2(!open2)}>Community</a>
              {open2 && <div className='menu'>
                <a>Instagram</a>
                <a>Facebook</a>
                <a>Discord</a>
                <a>Twitter</a>
              </div>}
              
            </div>
        </div>

        <div id='navbar-buttons'>
          <Link to='/viewdemo'><button className='button1'>View Demo</button></Link>   
            <button className='button2'>Launch App</button>
        </div>
    </div>

    <div style={{position:'sticky'}}>
<div onClick={()=>{inActive(!active)}} id='mail-circle'>
<span id='mail'>✉</span>
</div>
{ active &&
<div>  
<div onClick={()=>{inActive(!active)}} id='mail-circle'>
<span id='mail'>❌</span>
</div>
<div id='mail-input'>
<h3 style={{color:'white'}}>Get in touch</h3> <br />
<form>
<div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name" />
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name" />
    </div>
  </div>

  <div class="form-group">
    <label for="formGroupExampleInput"></label>
    <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Enter Email" required />
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput"></label>    
    <textarea style={{height:'100px', width:'100%', borderRadius:'5px', padding:'10px'}} name="" id="" cols="30" rows="20" placeholder='Type Message'></textarea>
  </div>
  <button className='submit-btn'>Submit</button>
</form>
</div>
</div>

}
</div>
    
    </div>
   
  )
}
