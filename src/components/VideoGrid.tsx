import React from 'react'
import { VideoCard } from './VideoCard'
import { SideBar } from './SideBar';

const VIDEOS = [{
    title : "Debt,Layoff: 134 years of wait",
      thumbnail : "./thumbnail.jpeg",
      logo : "./logo.png",
      author : "Nitish Gupta",
      views : "50M",
      timestamp : "10"
},

{
    title : "Debt,Layoff: 135 years of wait",
      thumbnail : "./thumbnail.jpeg",
      logo : "./logo.png",
      author : "Nitish Gupta",
      views : "50M",
      timestamp : "10"
},

{
    title : "Debt,Layoff: 136 years of wait",
      thumbnail : "./thumbnail.jpeg",
      logo : "./logo.png",
      author : "Nitish Gupta",
      views : "50M",
      timestamp : "10"
},

{
    title : "Debt,Layoff: 137 years of wait",
      thumbnail : "./thumbnail.jpeg",
      logo : "./logo.png",
      author : "Nitish Gupta",
      views : "50M",
      timestamp : "10"
},
{
    title : "Debt,Layoff: 137 years of wait",
      thumbnail : "./thumbnail.jpeg",
      logo : "./logo.png",
      author : "Nitish Gupta",
      views : "50M",
      timestamp : "10"
},
{
    title : "Debt,Layoff: 137 years of wait",
      thumbnail : "./thumbnail.jpeg",
      logo : "./logo.png",
      author : "Nitish Gupta",
      views : "50M",
      timestamp : "10"
},
{
    title : "Debt,Layoff: 137 years of wait",
      thumbnail : "./thumbnail.jpeg",
      logo : "./logo.png",
      author : "Nitish Gupta",
      views : "50M",
      timestamp : "10"
},
{
    title : "Debt,Layoff: 137 years of wait",
      thumbnail : "./thumbnail.jpeg",
      logo : "./logo.png",
      author : "Nitish Gupta",
      views : "50M",
      timestamp : "10"
},
{
    title : "Debt,Layoff: 137 years of wait",
      thumbnail : "./thumbnail.jpeg",
      logo : "./logo.png",
      author : "Nitish Gupta",
      views : "50M",
      timestamp : "10"
},
{
    title : "Debt,Layoff: 137 years of wait",
      thumbnail : "./thumbnail.jpeg",
      logo : "./logo.png",
      author : "Nitish Gupta",
      views : "50M",
      timestamp : "10"
},
{
    title : "Debt,Layoff: 137 years of wait",
      thumbnail : "./thumbnail.jpeg",
      logo : "./logo.png",
      author : "Nitish Gupta",
      views : "50M",
      timestamp : "10"
},
{
    title : "Debt,Layoff: 137 years of wait",
      thumbnail : "./thumbnail.jpeg",
      logo : "./logo.png",
      author : "Nitish Gupta",
      views : "50M",
      timestamp : "10"
}
]

export const VideoGrid = () => {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        
        {VIDEOS.map((video, index) => (
          <div key={index}>
            <VideoCard 
              title={video.title}
              thumbnail={video.thumbnail}
              logo={video.logo}
              author={video.author}
              views={video.views}
              timestamp={video.timestamp}
            />
          </div>
        ))}
      </div>
    );
  };
