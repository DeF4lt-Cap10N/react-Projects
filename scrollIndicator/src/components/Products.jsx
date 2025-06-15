import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = ({ url }) => {
  const [productsdata, setProductsData] = useState([]);
 

  async function fetchData(url) {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setProductsData(response.data.products);
    } catch (err) {
      console.log(err, "api did not hit");
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        {productsdata && productsdata.length > 0 ? (
          productsdata.map((item) => {
            return (
              <div
                className="text-2xl w-1/4 text-center  text-teal-500 bg-slate-300 p-2 m-3 rounded-full"
                key={item.title}
              >
                {item.title}
              </div>
            );
          })
        ) : (
          <div>Product Not available</div>
        )}
      </div>
    </>
  );
};

export default Products;
