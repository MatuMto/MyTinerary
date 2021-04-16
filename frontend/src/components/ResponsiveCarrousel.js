
import React, { Component } from 'react';
import ResponsiveSlide from './ResponsiveSlide'
import Carousel from 'react-elastic-carousel';
import CarrouselData from './CarrouselData' 

class ResponsiveCarrousel extends Component {
  render (props) {
    const carrouselData = this.props.carrouselData 
    // console.log(carrouselData)

    return (
      <section className='responsive-carrousel'>
        <Carousel itemsToShow={2}>
          {carrouselData.map(array => array.map(object => <ResponsiveSlide singleSlide={object} /> ))}
        </Carousel>
      </section>

    )
  }
}

export default ResponsiveCarrousel