import {useEffect, useState} from "react";
import axios from "axios";

const Pizza = ()=>{
  const [data, setData] = useState([])
  const  sendRequest = async ()=>{
    try{
      const info = await axios({
        method:"GET",
        url: 'https://64186f7a29e7e36438e8aa19.mockapi.io/items'
      })
      setData(info.data)
    }
    catch {
      console.log("error")
    }
  }
  useEffect( () => {
    sendRequest()
  },[])


  console.log(data)

  return(
    <div>
      {
        data.map((item)=>{
          return(
            <div key={item.id}>
              <div>
                <img src={item.imageUrl} alt=""/>
              </div>
              <h2>{item.title}</h2>
              <p>{item.price}</p>
            <button onClick={()=>sendRequest()}>restart</button>
            </div>
          )
        })
      }
    </div>
  )
}
export default Pizza
