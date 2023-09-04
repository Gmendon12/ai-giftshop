import React from 'react'
import { Link } from 'react-router-dom'

export default function Expired() {
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
            <Link to='/generic'><button className='generic-card-btn-inactive'>Claim</button></Link>
            
            <Link to='/generic/expired'><button className='generic-card-expired'>Expired</button></Link>     
            </div>
         
         <div style={{display:'flex', flexDirection:'row', gap:'50px'}}>
            <div style={{position:'relative'}}>
              <img src="\images\nft-expired.png" className='generic-card2'  />
              <div className='expired'>Expired</div>
            </div>
            <div style={{position:'relative'}}>
            <img src="\images\nft-expired-2.jpg" className='generic-card2'  />
            <div className='expired'>Expired</div>
         </div>
            </div>
          </div>
        </div>
    </div>
  )
}
