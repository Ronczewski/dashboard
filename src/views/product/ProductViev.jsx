import { useEffect, useState } from "react"
import { Dialog } from "../../components/common/Dialog/Dialog"
import { ProductDetails } from "./productDetails"


export const ProductView = ()=> {
   const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      const url = 'http://localhost:3003/productsList'
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data)
    })()
  }, [])

  console.log(products, 'Elo')

  return (
    <div className="UserLists">
      <p style={{textAlign: 'center'}}>Products range</p>
      <ul>
        <Dialog titel='List of products'>
          {
            products
              .sort((a, b) => a.name > b.name ? 1 : -1)
              .map((ele) => <ProductDetails products={ele} key={ele.name} />)
          }
        </Dialog>
      </ul>
    </div>
  )
}

  


