import axios from 'axios'
import React, { useState } from 'react'


const Weather = () => {

  const [city, setCity] = useState("")

  const[weather,setWeather] = useState("")
  const[temp,setTemp] = useState("")
  const[desc,setDesc] = useState("")

  function handleChange(evt) {

    setCity(evt.target.value)

  }

  const getReport =()=>{
    var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=321154a93ae9b8240eef2f226c8535cd`)
 
    weatherData.then((success)=>{
      setWeather(success.data.weather[0].main)
      setTemp(success.data.main.temp)
      setDesc(success.data.weather[0].description)
    }).catch((errmsg)=>{
      console.log(errmsg);
      
    })

  }





return (
  <div className='bg-black p-20 h-screen'>
    <div className='space-y-2 p-10 bg-[#5ade4b] border rounded-md '>
      <h1 className='text-2xl font-semibold'>Weather Report</h1>
      <p className='text-gray-500'>I can give you aweather report about your city</p>
      <input onChange={handleChange} value={city} type='text' placeholder='Enter you City' className='border border-gray-500 rounded-lg p-1' /><br></br>
      <button onClick={getReport} className='bg-black p-2 text-white px-2 py-2 border rounded-md hover:active:bg-gray-900'>Get Report</button>
      <h2 className='text-md font-bold'>Weather:<span className='text-base  font-medium text-pink-800'> {weather}</span></h2>
      <h2 className='text-md font-bold'>Temperature:<span className='text-base  font-medium text-pink-800'> {temp}</span></h2>
      <h2 className='text-md font-bold'>Description:<span className='text-base  font-medium text-pink-800'> {desc}</span></h2>
    </div>
  </div>
)
}
export default Weather