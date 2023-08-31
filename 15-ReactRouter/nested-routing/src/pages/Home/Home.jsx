import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import home from './Home.module.css'

export default function Home() {

  const [sum, setSum] = useState(0)

  function addSum() {
    // setSum((sum)=>{
    //   return sum + 1
    // })

    setSum(2)
  }

  return (
    <div className={home['home-container']}>
      <h1>Home</h1>
      {/* <h4>Sum: {sum}</h4> */}
      {sum === 2 ? <Navigate to='/about' /> : <h4>Sum: {sum}</h4>}
      <button onClick={addSum}>Click to add</button>
    </div>
  )
}

