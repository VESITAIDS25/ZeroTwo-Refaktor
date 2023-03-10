import React, { useEffect } from 'react'
import {useState} from 'react'
import { useSearchParams } from  'react-router-dom'
import axios from 'axios'
import { async } from '@firebase/util'
import CourseCard from '../components/CourseCard'
import NavBar from '../components/navbar'
import { Footer } from '../components/footer'

export const Courses = () => {
   const [course, setCourse] = useState([])
  const [searchTerm, setSearchTerm] = useState("HI")

const handleChange = (e) => {
    setSearchTerm(e.target.value)
}

  // useEffect(()=> {
  //   const getData = async () => {
  //      var response = await axios.get(`/predict_course?${searchTerm}`)
  //      setCourse(response.data);
  //     }
  //     getData()
  // }, [courses])
const handleSearchCourse = () => {
  setCourse(searchCourses())
}
  const searchCourses = async () => {
    const data = await axios.get(`/predict_course?search_term=Python`)
    return data.data
  }

  useEffect(() => {
    searchCourses()
  }, [])


  
  return (
    <div id='course'>
      <NavBar/>
        {/* <label htmlFor="search-input"></label><input id="search-input" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
        <button type="submit">Search</button> */}
          <input type="text" name="search-term" onChange={e => setSearchTerm(e.target.value)} />
      <Footer/>
    </div>
  )
}

export default Courses
