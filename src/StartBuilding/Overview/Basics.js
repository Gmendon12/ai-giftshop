import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Basics() {
  const[overview, setOverview] = useState(true) 
  return (
    <div id='start-building-container'>
    <div id='start-building-header'>
        <div className='start-building-company-name'>Generic</div>

        <div className='start-building-icons'>
            <div>🔅</div>
            <div>🌐</div>
            <div>🎇</div>
            <div>🚙</div>
        </div>
     </div>

     <div id='start-building'>
     <div className='start-building-main'>
                <div>
                    <div onClick={()=>setOverview(!overview)} >
                        <div className='overview' >Overview</div>    
                    </div>
                </div>
                
                {overview ? (
                        <div>
                        <span class="material-symbols-outlined">unfold_less</span>
                        <div style={{display:'flex', flexDirection:'row', gap:'10px'}}>
                        <div className='start-building-line'></div>
                        <div className='overview-links'>
                        <Link to='/startbuilding/overview/introduction' style={{textDecoration:'none', color:'rgb(175, 175, 175)', fontSize:'10px'}} >Introduction</Link>
                        
                        <div style={{position:'relative', display:'flex', flexDirection:'row'}}>
                            <div className='basics-line'></div>
                            <Link to='/startbuilding/overview/basics'  style={{textDecoration:'none', color:'rgb(175, 175, 175)', fontSize:'10px',color:'aqua'}}>Basics</Link>
                        </div>
                        <Link to='/startbuilding/overview/steps'  style={{textDecoration:'none', color:'rgb(175, 175, 175)', fontSize:'10px'}}>Steps</Link>
                        </div>
                        </div>
                        </div>
                    ) : <span class="material-symbols-outlined" >unfold_more</span> }
               
                 <div>
                    <div>Tutorial</div>
                </div>
                <div>
                    <div>Conclusion</div>
                </div>

            </div>

            <div className='start-building-content'>
                <div className='start-building-content-heading'>Basics</div>
                <div>
                    <p className='start-building-content-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab, quaerat, eveniet ratione sit optio excepturi saepe fugit, voluptatum eos aliquam modi quae corrupti cum dolorum quos perferendis! Et, eaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, facere excepturi! Illum nam numquam voluptas, sed animi laboriosam voluptatem in nulla asperiores perferendis, molestiae unde sequi, distinctio ut officiis suscipit?</p>
                </div>

                <div>
                    <div className='start-building-content-heading'>How it Works</div> <br />
                    <p className='start-building-content-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab, quaerat, eveniet ratione sit optio excepturi saepe fugit, voluptatum eos aliquam modi quae corrupti cum dolorum quos perferendis! Et, eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste sunt incidunt laudantium voluptatum dolor, nulla itaque expedita blanditiis rerum illo molestiae, praesentium ipsam eos, fugiat aspernatur quisquam ex? Possimus, quasi!</p>
                </div>
            </div>
     </div>
</div>
  )
}
