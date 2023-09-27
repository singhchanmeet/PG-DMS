import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Import the images
import newsImage1 from '../assets/news1.jpg';
import newsImage2 from '../assets/news2.png';

const NewsCarousel = () => {
  // Dummy newsItems data
  const newsItems = [
    {
      title: 'News Item 1',
      imageSrc: newsImage1,
      link: 'https://example.com/news1',
    },
    {
      title: 'News Item 2',
      imageSrc: newsImage2,
      link: 'https://example.com/news2',
    },
    {
      title: 'News Item 2',
      imageSrc: newsImage2,
      link: 'https://example.com/news2',
    },
    {
      title: 'News Item 2',
      imageSrc: newsImage2,
      link: 'https://example.com/news2',
    },
    // Add more news items here
  ];

  return (
    <Carousel className='bg-zinc-400 rounded shadow w-[70%] m-auto'
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000} // Adjust the interval in milliseconds
    >
      {newsItems.map((item, index) => (
        <div key={index} className='w-[80%] m-auto'>
          <img className='!w-auto h-[200px]' src={item.imageSrc} alt={item.title} />
          <p className="legend cursor-pointer !w-[100px]" >{item.title}</p>
          <a href={item.link} target="_blank">
            <button className="legend !w-[100px] !ml-[30%]">Read More</button>
          </a>
        </div>
      ))}
    </Carousel>
  );
};

export default NewsCarousel;
