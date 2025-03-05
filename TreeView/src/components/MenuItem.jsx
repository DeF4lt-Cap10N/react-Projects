import React, { useState } from 'react'
import MenuList from './MenuList'

const MenuItem = ({ item }) => {
   const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

   function handleToggleChildren(getCurrentLabel) {
      setDisplayCurrentChildren({
         ...displayCurrentChildren, [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
      });
   }

   console.log(displayCurrentChildren);

   return (
      <li>
         <div style={{ display: "flex", gap: "20px" }}>
            <p>{item.label}</p>
            {
               item && item.children && item.children.length ? (<span style={{cursor:"pointer" , marginTop: "15px" }} onClick={() => handleToggleChildren(item.label)}>
                  {
                     displayCurrentChildren[item.label] ?"-":"+"
                  }
               </span>) : null
            }
         </div>
         {
            item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (<MenuList list={item.children} />) : null
         }
      </li>
   )
}

export default MenuItem
