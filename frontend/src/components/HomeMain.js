import React from 'react'
import Header from './Header'
import Hero from './Hero'
import CallToAction from './CallToAction'

function HomeMain(){
   return(
         <div className="home-main" style={{
            background: `url('/img/static-background.png')`,
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