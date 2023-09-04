import React from 'react'
import { Link } from 'react-router-dom'

export default function Practical_Example() {
  return (
    <div id='practical-example'>
       <div className='practical-example-header'>PRACTICAL EXAMPLE</div>
       <div className='empowering'>Show Us Your Creativity</div> <br />
       <div className='practical-example-box-flex'>
       <div className='practical-example-flex'>
        <div className='practical-example-box'>
            <div className='practical-example-box-head'> Case 1 </div>
            <div id='circle'>
              <span className='arrow'>▶</span>
            </div>
        </div>
        <div className='practical-example-box'>
            <div className='practical-example-box-head'>Case 2</div>
            <div id='circle'>
              <span className='arrow'>▶</span>
            </div>
        </div>
        <div className='practical-example-box'>
            <div className='practical-example-box-head'>Case 3</div>   
            <div id='circle'>
              <span className='arrow'>▶</span>
            </div>
        </div>
       </div>

       <div className='practical-example-box2'>
        <div className='practical-example-box2-head'>Build Yours Now</div>
        <p className='practical-example-box2-para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem, aspernatur <br /> error possimus eum esse quam voluptate fugiat.</p> <br />
        <Link to='/startbuilding/overview'><button className='button2'>Build Now</button></Link>     
       </div>

       </div>

      
    </div>
  )
}
