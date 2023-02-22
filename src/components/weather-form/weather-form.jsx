import { useState } from "react"

export const WeatherForm = () => {
   const [formWeather, setFormWeather] = useState({
      city: "",
      temperature: '',
   })

   const handleChange = (e) => {
      const { value, id } = e.target
      setFormWeather({ ...formWeather, [id]: value })
   }

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (formWeather.city.trim().length < 1) {
         return
      }

      await fetch('http://localhost:3003/weatherCondition', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(formWeather)
      })

      setFormWeather({
         city: "",
         temperature: ''
      })
   }

   return (
      <form onSubmit={handleSubmit} >
         <label
            className="label"
            htmlFor="city">City</label>
            <br />
         <input
            className="inputs"
            type="text"
            onChange={handleChange}
            // onChange= {e => setFormWeather(e.target.value)}
            id='city'
            value={formWeather.city}
         />
         <br />
         <label className="label" htmlFor="temperature">Temperature</label>
         <br />
         <input
            className="inputs"
            type="number"
            onChange={handleChange}
            // onChange={e => setFormWeather(e.target.value)}
            id='temperature'
            value={formWeather.temperature}
         /> <br />
         <button 
         style={{width: '100px', margin: '10px'}}
         className="button" 
         type="submit">press buttom</button>
      </form>
   )
}