import React from 'react'

const CourseCard = (item) => {
  console.log(item);
  return (
    <div className='p-4 rounded-md bg-slate-300 flex-col'>
      <div className='flex-1'>Course: <h1>{item.item.course_title}</h1> </div>
      <div className='flex-1'>GoTo:<a target="_blank" href={item.item.url}>{item.item.url}</a> </div>
      <div className='flex-1'>Price: {item.item.price}</div>
      <div className='flex-1'>Published: {item.item.published_time}</div>
    </div>
  )
}

export default CourseCard;