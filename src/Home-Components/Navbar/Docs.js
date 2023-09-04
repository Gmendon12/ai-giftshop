import React from 'react'
import './Docs.css'

export default function Docs() {
  return (
    <div id='docs'>
        <div id='docs-header'>
            <div className='docs-company-name'>Generic</div>

            <div className='docs-header-icons'>
                <div>🔅</div>
                <div>🌐</div>
                <div>🎇</div>
                <div>🚙</div>
            </div>
         </div>

        <div className='docs-template'>
            <div className='docs-template-head'>Welcome to Generic Protocol</div>
            <p className='docs-template-para'>Lorem ipsum dolor sit <font color="aqua">amet consectetur adipisicing elit.</font> Ratione voluptas soluta iste id. Ipsum <br /> dolore corporis ipsam sunt recusandae, esse nesciunt sint doloribus commodi cupiditate maiores <br /> mollitia qui harum illo.</p>
        </div>

        <div className='docs-ticks'>
            <div className='docs-ticks-text'> <font color='aqua'>✔</font> Open-Source</div>
            <div className='docs-ticks-text'> <font color='aqua'>✔</font> Fully Decentralized</div>
            <div className='docs-ticks-text'> <font color='aqua'>✔</font> High Security</div>
            <div className='docs-ticks-text'> <font color='aqua'>✔</font> Minimal Costs</div>
        </div>

        <div className='docs-footer'>
            <button className='docs-btn'>Read Docs</button>
            <span className='docs-github'>View on GitHub</span>
            <span id='arrow-right'>➡</span>     
        </div>
    </div>
  )
}
