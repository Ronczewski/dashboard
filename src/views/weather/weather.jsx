import { useEffect, useState } from "react"
import { Dialog } from "../../components/common/Dialog/Dialog"
import { WeatherForm } from "../../components/weather-form/weather-form"


import { WeatherDetails } from "./WeatherDetails"


const WeatherView = () => {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    (async () => {
      const url = 'http://localhost:3003/weatherCondition'
      const response = await fetch(url)
      const data = await response.json()
      setWeather(data)
    })()
  }, [])

  console.log(weather, 'Elo')

  return (
    <div className="UserLists">
      <p style={{textAlign: 'center'}}>WeatherCondition</p>
      <WeatherForm/>
      <ul>
        <Dialog titel='Weather Forecast'>
          {
            weather
              .sort((a, b) => a.city > b.city ? 1 : -1)
              .map((ele) => <WeatherDetails weather={ele} key={ele.city} />)
          }
        </Dialog>
      </ul>
    </div>
  )
}


export default WeatherView