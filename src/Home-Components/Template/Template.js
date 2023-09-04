import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import TagCloud from "TagCloud"
import { useEffect } from 'react';
import { useRef } from 'react';

export default function Template() {
  const sphereMounted = useRef(false)
  useEffect(()=>{
    if(sphereMounted.current === false){
      const myTags = [
        "HTML", "CSS","Bootstrap",
        "JavaScript", "Reactjs","Git", "GitHub",
        "Babel", "Webpack", "Nodejs"
      ];

      var tagCloud = TagCloud('.sphere', myTags,{
        radius: 100,
        maxSpeed: 'normal',
        initSpeed: "normal",
        direction: 135,
        keep: true
      });
    }
    return () => sphereMounted.current = true
  }, []);
  return (
    <div id='template'>
      <motion.div animate={{y:-20}} transition={{duration:0.8}} className='relic-protocol'>GENERIC PROTOCOL</motion.div>
      

      <motion.div animate={{y:-20}} transition={{duration:0.8}} ><div className='sphere'></div> </motion.div>
      {/* <motion.div animate={{y:-20}} transition={{duration:0.8}} className='template-main-content'>Lorem <span className='trustless-oracle'>Ipsum Dolor</span> sit amet, consectetur adipisicing elit</motion.div> */}
  
      <motion.p animate={{y:-20}}  transition={{duration:0.8}} className='template-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nisi nostrum   <br /> ipsum esse quaerat sed molestias eveniet natus libero voluptatibus corporis itaque.</motion.p>

      <motion.div animate={{y:-20}}  transition={{duration:0.8}} className='template-buttons'>
        <Link to='/startbuilding/overview'><button className='button2'>Start Building</button></Link>

        <Link to='/docs'><button className='button1'>Learn More</button></Link>
       
      </motion.div>
      
    </div>
  )
}
