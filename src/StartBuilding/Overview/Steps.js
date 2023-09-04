import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Steps() {
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
                        <Link to='/startbuilding/overview/basics'  style={{textDecoration:'none', color:'rgb(175, 175, 175)', fontSize:'10px'}}>Basics</Link>
                        <div style={{position:'relative', display:'flex', flexDirection:'row'}}>
                            <div className='basics-line'></div>
                            <Link to='/startbuilding/overview/steps'  style={{textDecoration:'none', color:'rgb(175, 175, 175)', fontSize:'10px', color:'aqua'}}>Steps</Link>
                        </div>
                        
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
            <div className='start-building-content-heading'>Steps</div>

            <div className='start-building-content-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum recusandae, laboriosam adipisci quos porro iure non praesentium illum esse animi illo natus id tempora numquam magnam ipsa sapiente rerum voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dicta molestias ratione! Corporis ipsum iusto eum quaerat reiciendis inventore nihil nemo repellat deleniti soluta, delectus, corrupti perspiciatis omnis in quibusdam!</div>
            <div className='start-building-content-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum recusandae, laboriosam adipisci quos porro iure non praesentium illum esse animi illo natus id tempora numquam magnam ipsa sapiente rerum voluptates. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas aut, dolore quaerat vel magni laborum expedita eum sunt distinctio aperiam rem enim, totam neque facilis, earum accusantium eligendi quia at?</div>
            <div className='start-building-content-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum recusandae, laboriosam adipisci quos porro iure non praesentium illum esse animi illo natus id tempora numquam magnam ipsa sapiente rerum voluptates?</div>
            <div className='start-building-content-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum recusandae, laboriosam adipisci quos porro iure non praesentium illum esse animi illo natus id tempora numquam magnam ipsa sapiente rerum voluptates?</div>

        </div>
         </div>
    </div>
  )
}
