import React from 'react'
import './Startbuilding.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Startbuilding() {

  const[overview, setOverview] = useState(false)
  const[tutorial, setTutorial] = useState(false)
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
                        <div style={{position:'relative', display:'flex', flexDirection:'row'}}>
                            <div className='introduction-line'></div>
                            <Link to='/startbuilding/overview/introduction' style={{textDecoration:'none', color:'rgb(175, 175, 175)', fontSize:'10px',color:'aqua'}} >Introduction</Link>
                        </div>
                        <Link to='/startbuilding/overview/basics'  style={{textDecoration:'none', color:'rgb(175, 175, 175)', fontSize:'10px'}}>Basics</Link>
                        <Link to='/startbuilding/overview/steps'  style={{textDecoration:'none', color:'rgb(175, 175, 175)', fontSize:'10px'}}>Steps</Link>
                        </div>
                        </div>
                        </div>
                    ) : <span class="material-symbols-outlined" >unfold_more</span> }
                
                         
               
                 <div>
                    <Link to='/startbuilding/tutorial' style={{color:'rgb(175, 175, 175)'}}> <div>Tutorial</div> </Link>
                </div>
                <div>
                    <Link to='/startbuilding/conclusion' style={{color:'rgb(175, 175, 175)'}}><div>Conclusion</div></Link>
                </div>

            </div>

            <div className='start-building-content'>
                <div className='start-building-content-heading'>Introduction</div>
                <div>
                    <div>What is Generic</div>
                    <p className='start-building-content-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab, quaerat, eveniet ratione sit optio excepturi saepe fugit, voluptatum eos aliquam modi quae corrupti cum dolorum quos perferendis! Et, eaque.</p>
                </div>

                <div>
                    <div>Our Inspiration</div>
                    <p className='start-building-content-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab, quaerat, eveniet ratione sit optio excepturi saepe fugit, voluptatum eos aliquam modi quae corrupti cum dolorum quos perferendis! Et, eaque.</p>
                </div>

                <div>
                    <div>Features</div>
                    <ul className='start-building-content-para'>
                        <li><b>Trustless</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum repellat officia aut adipisci tenetur? Repellendus voluptatum reprehenderit tenetur quod voluptate nemo asperiores ad. Reprehenderit quaerat recusandae voluptatum, alias quos accusamus? </li>
                        <li><b>Scalable</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eum laborum doloribus tenetur animi dicta culpa, omnis nobis officiis ipsa veritatis aspernatur quaerat eaque excepturi voluptas dignissimos sit sunt non.</li>
                        <li><b>Efficient</b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil iusto magnam, molestias ipsum nam ex nulla ad iste impedit quaerat perferendis cupiditate minus quam sapiente obcaecati sequi delectus odit esse!</li>
                    </ul>
                </div>
            </div>
         </div>
    </div>
  )
}
