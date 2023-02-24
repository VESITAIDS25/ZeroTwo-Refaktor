import {Footer} from '../components/footer.js'
import {MainText} from '../components/mainText.js'
import NavBar from '../components/navbar.js'
import Info from '../components/information.js'
import React from 'react'


const HomePage = () => {
  return (
    <div>
      < NavBar />
      < MainText />
      <Info/>
      < Footer />
    </div>
  )
}

export default HomePage

