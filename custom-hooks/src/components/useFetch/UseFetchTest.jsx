import React from "react";
import { useFetchHook } from "./useFetchHook";

const UseFetchTest = () => {
  const { data, pending, error } = useFetchHook(
    "https://dummyjson.com/products",
    {}
  );

  console.log(error, data, pending);
  return (
    <>
      <div style={{display:"flex", justifyContent:"center" }}>
        <div>
          {
            error?(<div>these some error please after sometime</div>):null
          }
        </div>
        <div>
          {data && data.products?.length
            ? data.products.map((item, index) => (
                <div key={item.title} style={{display:"flex", justifyContent:"center", color:index%2==0?"red":"green"}}>{item.title}</div>
              ))
            : null}
        </div>

        {
          pending?(<div>currenct task on pending plese wait</div>):null
        }
      </div>
    </>
  );
};

export default UseFetchTest;
