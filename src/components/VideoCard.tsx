

import React from 'react'

export const VideoCard = (props:any) => {
  return (
    <div className='p-3 cursor-pointer' >
        <img className='rounded-xl' src={props.thumbnail}/>
        <div className='grid grid-cols-12 pt-2'>
            <div className='col-span-1'>
                <img className={"rounded-full w-20 h-20"} src={props.logo}/>
            </div>

            <div className='col-span-11 pl-5'>
                {props.title}
                <div className='col-span-11 text-base text-gray-600'>
                {props.author}
                </div>
                <div className='col-span-11 text-base text-gray-600'>
                {props.views} Views: {props.timestamp} days ago
                </div>
            </div>

       </div>
    </div>
  )
}
