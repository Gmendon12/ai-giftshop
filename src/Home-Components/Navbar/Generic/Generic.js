import React from 'react'
import './Generic.css'
import { Link } from 'react-router-dom'

export default function Generic() {
  return (
    <div id='generic'>
        <div id='generic-header'>
            <div className='generic-company-name'>Generic</div>
            <button className='generic-btn'>Link Wallet</button>
        </div>

        <div className='generic-template'>
            <div className='generic-template-head'>Lorem <font color='aqua'>ipsum dolor amit</font></div>
        </div>

        <div id='generic-cards'>
          <div className='generic-cards-flex'>
            <div style={{display:'flex', flexDirection:'row', gap:'40px'}}>
            <Link to='/generic'><button className='generic-card-btn'>Claim</button></Link>
            
            <Link to='/generic/expired'><button className='generic-card-expired-inactive'>Expired</button></Link>     
            </div>
           
           <div style={{position:'relative'}}>
           <img src="\images\nfticon.jpg" className='generic-card1' />
           <div className='claim-now'>
            <div style={{fontWeight:'700'}}>0.006 ETH</div>
            <button className='claim-now-btn'>Claim Now</button>
           </div>
           </div>
            
              {/* <div className='generic-card-nft'>
               <img src="\images\nft-icon.jpg" alt="" height={'200px'} />
              {/* </div> */}
          </div>
          </div>
        </div>
  )
}
