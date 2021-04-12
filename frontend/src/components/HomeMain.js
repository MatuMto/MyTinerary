import React from 'react'
import Header from './Header'
import Hero from './Hero'
import CallToAction from './CallToAction'
import ResponsiveCarrousel from './ResponsiveCarrousel'

function HomeMain(){
   return(
         <div className="home-main" style={{
            background: `url('/img/static-background.png')`,
            // background: `url('/img/background-video.mp4')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
         }}>
            <Header/>
            <Hero/>
            <CallToAction/>
         </div>
   )
}

export default HomeMain