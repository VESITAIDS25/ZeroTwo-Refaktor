import React from 'react'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect,
} from "react-router-dom";
import homepng from '../assets/homepng.png'
import {motion} from 'framer-motion'

import FindJobs from '../pages/FindJobs'

export const MainText = () => {
    return(
        <section class="text-gray-600 body-font divide-y">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
    <motion.div 
     initial={{
      x: -60,
      opacity: 0.5
   }}
   animate={{
     x:0
     ,opacity: 1
   }}
   transition={{
     duration: 1.54
   }}
    class="lg:max-w-lg ml-28 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={homepng}/>
    </motion.div>
    <motion.div 
     initial={{
      x: 60,
      opacity: 0.5
   }}
   animate={{
     x:0
     ,opacity: 1
   }}
   transition={{
     duration: 2
   }}
    class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-4xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p class="mb-8 w-3/4 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
      <a href="http://localhost:3000/findjob" class="relative rounded px-5 py-2.5 overflow-hidden group bg-indigo-500  hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-indigo-400 transition-all ease-out duration-300">
<span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative">Find Jobs</span>
</a>
      </div>
    </motion.div>
  </div>
</section>
    )
}