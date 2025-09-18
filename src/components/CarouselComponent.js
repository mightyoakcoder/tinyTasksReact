import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Tasks from "./Tasks";
import { taskData, responsive } from "../data";

function CarouselComponent() {
  const task = taskData.map((item) => (
    <Tasks
      key={item.id}
      name={item.name}
      url={item.imageurl}
      points={item.points}
    />  
  ));

  return (
    <Carousel
      infinite={true} 
      showDots={true} 
      responsive={responsive} 
      className="react-multi-carousel-list">
      {task}
    </Carousel>
  )
}

export default CarouselComponent