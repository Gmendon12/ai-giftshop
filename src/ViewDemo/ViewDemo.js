import React from 'react'
import './ViewDemo.css'
import { Link } from 'react-router-dom'

export default function ViewDemo() {
  return (
    <div id='view-demo'>
        <div id='view-demo-header'> ❗ For demo purposes only. Code not audited for production use.</div>

        <div className='view-demo-logo-section'>
            <div className='view-demo-logo-section1'>
                <div id='view-demo-company-name'> Generic </div>
                <Link to='/docs'><a>Docs</a></Link>
                <a>GitHub</a>
            </div>
            <button className='view-demo-btn'>Link Wallet</button>
        </div>

        <div className='view-demo-content'>
            <div className='view-demo-content-text'>Lorem Ipsum <font color="aqua">dolor sit amet</font><br />consectetur adipisicing elit </div>
        </div>

        <div className='view-demo-option'>
            <div className='view-demo-option-head'>
            <Link to='/viewdemo' style={{textDecoration:'none'}}>
                <div className='option-head'>Link1</div>
                <div className='option-head-line-airdrop'></div>
            </Link>
            
            <Link to='/viewdemo/nft' style={{textDecoration:'none'}}>
                <div style={{color:'white'}}>Link2</div>
            </Link>

            <Link to='/viewdemo/randaq' style={{textDecoration:'none'}}>
                <div style={{color:'white'}}>Link3</div>
            </Link> 

            <Link to='/viewdemo/uniswap' style={{textDecoration:'none'}}>
                <div style={{color:'white'}}>Link4</div>
            </Link> 
            <Link to='/viewdemo/slots' style={{textDecoration:'none'}}>
                <div style={{color:'white'}}>Link5</div>
            </Link>
            
            </div>
            <hr className='view-demo-line' /> <br />
            <p>Lorem ipsum dolor, sit amet <font color='aqua'>consectetur adipisicing</font> elit. Necessitatibus totam <br /> pariatur modi deserunt, odio provident magnam quia</p>
            <hr className='view-demo-line2' />
            <div>Connect to Wallet</div> <br /> 
            <button className='view-demo-btn'>Link Wallet</button>

        </div>
    </div>
  )
}
