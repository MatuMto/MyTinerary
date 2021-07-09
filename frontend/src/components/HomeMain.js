import React from 'react'
import Header from './Header'
import Hero from './Hero'
import CallToAction from './CallToAction'
import HeaderDos from './HeaderDos'

function HomeMain(){
   return(
         <div className="home-main" style={{
            // background: `url('/img/static-background.png')`,
            background: `url('https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`,
            // background: `url('https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
         }}>
            <HeaderDos/>
            {/* <Header/> */}
            {/* <div className="hero-container">
               <div className="hero-text">Find your Perfect trip, Designed by insider who knows and love their cities!</div>
            </div> */}
            <CallToAction/>
         </div>
   )
}

export default HomeMain