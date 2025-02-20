import './loder.css'
import { useEffect, useState } from "react";





function Loderprod() {

   const [loading, setLoading] = useState(false);
   const [products, setProduct] = useState([]);
   const [cnt, setCnt] = useState(0);


   async function fetchProducts() {
      try {
         setLoading(true);
         const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${cnt === 0 ? 0 : cnt * 20}`);

         const result = await response.json();

         if (result && result.products && result.products.length) {
            setProduct((prevData) => [...prevData, ...result.products]);
            setLoading(false);
         }

         console.log(result);

      }
      catch (e) {
         console.log(e);
         setLoading(false);
      }
   }

   useEffect(() => {
      fetchProducts();
   }, [cnt])



   if (loading) {
      return <div>current Loading! wait</div>
   }

   return (
      <>
         <div className="container">
            <div className="product-container">
               {
                  products && products.length ? products.map((item) => (
                     <div className="product" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                     </div>
                  )) :null
               }
            </div>
            <div className='Button-Container'>
               <button  onClick={()=> setCnt(cnt+1)}>Load More Button</button>         
      
            </div>
         </div>

      </>
   )
}

export default Loderprod

