import React from 'react'

export default function Footer() {
  return (
    <div id='footer'>
        <div className='footer-content'>
            <div className='footer-logo-content'>
                <div className='footer-logo'> Generic Protocol</div> <br /> <br /> <br /> <br />
                {/* <div className='powered-by'>Powered By XYZ</div> */}
                <img src="\images\alchemy.png" alt="" height={'30px'} width={'150px'} />
            </div>

            <div className='footer-content2'>
                <div className='footer-content2-flex'>
                    <div className='footer-content2-head'>Developers</div>

                    <div className='footer-links'>
                    <div>Docs</div>
                    <div>Generic</div>
                    <div>Use Cases</div>
                    <div>Github</div>
                    </div>
                </div>

                <div className='footer-content2-flex'>
                    <div className='footer-content2-head'>Community</div>

                    <div className='footer-links'>
                    <div>Twitter</div>
                    <div>Medium</div>
                    <div>Discord</div>
                    </div>
                </div>

                <div className='footer-content2-flex'>
                    <div className='footer-content2-head'>General</div>

                    <div className='footer-links'>
                    <div>Careers</div>
                    <div>Join us</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
