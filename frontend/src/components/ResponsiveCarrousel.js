
import React, { Component } from 'react';
import ResponsiveSlide from './ResponsiveSlide'
import Carousel from 'react-elastic-carousel';

class ResponsiveCarrousel extends Component {
  render (props) {
    const carrouselData = this.props.carrouselData 

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