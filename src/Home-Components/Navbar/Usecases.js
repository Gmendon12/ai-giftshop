import React from 'react'
import './Usecases.css'

export default function Usecases() {
  return (
    <div>
        <div id='docs-header'>
            <div className='docs-company-name'>Generic</div>

            <div className='docs-header-icons'>
                <div>🔅</div>
                <div>🌐</div>
                <div>🎇</div>
                <div>🚙</div>
            </div>
         </div>

         <div className='usecases-content'>
          <div className='usecases-heading'>Use Cases</div>
          <div className='usecases-box-flex'>
            <div className='usecases-box'>
              <div className='usecase-box-heading'>Lorem Ipsum</div>
              <div className='usecase-box-line'></div>
              <p className='usecases-box-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dignissimos quas nemo similique? Quae in inventore culpa totam velit omnis modi recusandae sit cumque nam! Soluta saepe cum nemo ea!</p>
            </div>

            <div className='usecases-box'>
            <div className='usecase-box-heading'>Lorem Ipsum</div>
            <div className='usecase-box-line'></div>
              <p className='usecases-box-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dignissimos quas nemo similique? Quae in inventore culpa totam velit omnis modi recusandae sit cumque nam! Soluta saepe cum nemo ea!</p>
            </div>

            <div className='usecases-box'> 
            <div className='usecase-box-heading'>Lorem Ipsum</div>
            <div className='usecase-box-line'></div>
              <p className='usecases-box-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dignissimos quas nemo similique? Quae in inventore culpa totam velit omnis modi recusandae sit cumque nam! Soluta saepe cum nemo ea!</p>
            </div>
          </div>
         </div> <br /> <br />
         <hr className='usecases-footer-line' />
         <div className='footer'>
          <div style={{fontSize:'10px', color:'rgb(163, 163, 163)'}}>All content © 2023. All Right Reserved</div>
          <div className='docs-header-icons'>
                <div>🔅</div>
                <div>🌐</div>
                <div>🎇</div>
                <div>🚙</div>
            </div>
         </div>
    </div>
  )
}
