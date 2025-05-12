import React, { useEffect, useState } from 'react'
import Styles from './SlideShow.module.css'

function SlideShow() {

  const arr=[
    'A fine quotation is a diamond in the hand of a man of wit and a pebble in the hand of a fool.'
  ]

  const[idx,setIdx]=useState(0)

  function handleNext(e){
      setIdx((prev) => {
        return (prev + 1) % arr.length
    })
  }
    
  function handlePrevious(e){
    setIdx((idx-1+arr.length)%arr.length)
  }

  useEffect(() => {
    const ref = setInterval(handleNext, 2000);
    return () => clearInterval(ref);
}, [])

  return (
    <div id={Styles['container']}>
        <button onClick={handlePrevious} >{'<'}</button>
        <h1>
            {arr[idx]}
        </h1>
        <button onClick={handleNext} >{'>'}</button>
    </div>
  )
}

export default SlideShow