import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Template from '../Template/Template'
import About from '../About/About'
import HowitWorks from '../HowitWorks/HowitWorks'
import Practical_Example from '../Practical-example/Practical_Example'
import Footer from '../Footer/Footer'
import Policy from '../Policy/Policy'

export default function Home() {
  
  return (
    <div>
        <Header/>
        <Navbar/>
        <Template/>
        <About/>
        <HowitWorks/>
        <Practical_Example/>
        <Footer/>
        <Policy/>

    </div>
  )
}
