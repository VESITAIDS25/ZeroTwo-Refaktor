import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'
import { async } from '@firebase/util'
import NavBar from '../components/navbar'
import { Footer } from '../components/footer'

export const Courses = () => {

const getCourse = async () =>  {
  const response = await axios.get('/predict_course?search_term=Python')
  console.log(response.data)
}

  useEffect(() => {
    getCourse()
  })
  
  return (
    <div id='course'>
      <NavBar/>
      <Footer/>
    </div>
  )
}

export default Courses
