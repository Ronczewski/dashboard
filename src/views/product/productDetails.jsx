
export const ProductDetails = (props) => {
   const {name, capacity} = props.products
   
   
      return (
         //<Dialog titel = "hallo" >
           // <ul>
               <li>
               <strong>{name.charAt(0).toUpperCase() + name.slice(1)}  {capacity}ml.</strong> 
               </li>
           // </ul>
         //</Dialog>
      ) 
   }
   