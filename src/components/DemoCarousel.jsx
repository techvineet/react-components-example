import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import image1 from './assets/1.jpeg';
import image2 from './assets/2.jpeg';
import image3 from './assets/3.jpeg';
// general styles
import 'react-responsive-carousel/lib/styles/main.css';

// carousel styles
import 'react-responsive-carousel/lib/styles/carousel.css';

export default class DemoCarousel extends Component {
  onChange(i, item) {
    console.log("Index", i);
    console.log("Item", item);
  }

  onClickItem(i, item) {

  }

  render() {
    return (
      <Carousel axis="horizontal" showThumbs={false} showArrows={true} onChange={this.onChange} onClickItem={this.onClickItem} dynamicHeight emulateTouch>
          <div>
              <img src={image1} />
              <p className="legend">Legend 1</p>
          </div>
          <div>
              <img src={image2} />
              <p className="legend">Legend 2</p>
          </div>
          <div>
              <img src={image3} />
              <p className="legend">Legend 3</p>
          </div>
      </Carousel>
    );
  }
};
