import { useState } from 'react'
import './App.css'
import Professor from './components/Professors'
import yanofsky from "./assets/images/yanofsky.png"
import samanta from "./assets/images/samanta.png"
import none from "./assets/images/no_picture.png"
import levitan from "./assets/images/levitan.png"
import cuevas from "./assets/images/cuevas.png"
import chuang from "./assets/images/chuang.png"
import block from "./assets/images/block.png"
import goodson from "./assets/images/goodson.png"
import benes from "./assets/images/benes.png"
import nguyen from "./assets/images/nguyen.png"
import rudowsky from "./assets/images/rudowsky.png"
import selvan from "./assets/images/selvan.png"
import taylan from "./assets/images/taylan.png"
import xiang from "./assets/images/xiang.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <h1>Top Rated Professors At Brooklyn College</h1>
      </header>

      <div className='professor-container'>

        <h2>Computer Science Professors</h2>
        <div className='cs'>
          <Professor name="Priyanka Samanta" rating="4.8/5.0" image={samanta} link="https://www.ratemyprofessors.com/professor/2757901" />
          <Professor name="Basak Taylan" rating="4.5/5.0" image={taylan} link="https://www.ratemyprofessors.com/professor/2363018" />
          <Professor name="Panneer Selvan" rating="5.0/5.0" image={selvan} link="https://www.ratemyprofessors.com/professor/2995207" />
          <Professor name="Katherine Chuang" rating="2.4/5.0" image={chuang} link="https://www.ratemyprofessors.com/professor/2498806" />
          <Professor name="Moche Lach" rating="4.7/5.0" image={none} link="https://www.ratemyprofessors.com/professor/2538695" />
          <Professor name="Noson Yanofsky" rating="4.1/5.0" image={yanofsky} link="https://www.ratemyprofessors.com/professor/78366"/>
          <Professor name="Carlos Cuevas" rating="4.4/5.0" image={cuevas} link="https://www.ratemyprofessors.com/professor/2974235" />
          <Professor name="Yongqing Xiang" rating="3.4/5.0" image={xiang} link="https://www.ratemyprofessors.com/professor/493854" />
          <Professor name="Ira Rudowsky" rating="4.3/5.0" image={rudowsky} link="https://www.ratemyprofessors.com/professor/296621" />
          <Professor name="Gerald Weiss" rating="4.6/5.0" image={none} link="https://www.ratemyprofessors.com/professor/510797"  />
          <Professor name="Rebecca Levitan" rating="3.2/5.0" image={levitan} link="https://www.ratemyprofessors.com/professor/2009423" />
          <Professor name="Miriam Briskman" rating="4.8/5.0" image={none} link="https://www.ratemyprofessors.com/professor/2699760" />
          
        </div>

        <h2>Mathematics Professors</h2>
        <div className='math'>
          <Professor name="Jason Block" rating="4.1/5.0" image={block} link="https://www.ratemyprofessors.com/professor/2478281" />
          <Professor name="Heidi Goodson" rating="5.0/5.0" image={goodson} link="https://www.ratemyprofessors.com/professor/2459183" />
          <Professor name="Christian Benes" rating="4.6/5.0" image={benes} link="https://www.ratemyprofessors.com/professor/1046866" />
          <Professor name="Liem Nguyen" rating="5.0/5.0" image={nguyen} link="https://www.ratemyprofessors.com/professor/2890659" />
        </div>

      </div>
    </div>
  )
}

export default App
