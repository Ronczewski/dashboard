
export const WeatherDetails = (props) => {
   const {city, temperature} = props.weather
   
   
      return (
         //<Dialog titel = "hallo" >
           // <ul>
               <li>
               <strong>In {city.charAt(0).toUpperCase() + city.slice(1)} we've got {temperature}c.</strong> 
               </li>
           // </ul>
         //</Dialog>
      ) 
   }
   