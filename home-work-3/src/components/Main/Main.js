import React, {useEffect, useState} from 'react'
import First from '../First/First'

const Main = () => {
  const [data, setData]=useState(20)
  console.log(data, 'Main')
  let text = 500
  // console.log(text,"main_text")
  return (
    <div>
      <p>qwtbsadasdsasdfdsadasdassa435422sggb</p>
      <First text={text} data={data} setData={setData}/>
    </div>

  )
}

export default Main
