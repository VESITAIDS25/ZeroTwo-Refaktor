import {Footer} from '../components/footer.js'
import {MainText} from '../components/mainText.js'
import NavBar from '../components/navbar.js'
import Info from '../components/information.js'
import React from 'react'
import MyDivider from '../components/MyDivider.js'


const HomePage = () => {
  return (
    <div >
      < NavBar />
      < MainText />
      <MyDivider/>
      <Info/>
      < Footer />
    </div>
  )
}

export default HomePage

