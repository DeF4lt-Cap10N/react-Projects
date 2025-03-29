import React, { useState } from 'react'
import Profile from './Profile';
import Settings from './Settings'
import Interest from './Interest'

const Tab = () => {

   const [data, setData] = useState();
   const [tabb, setTabb] = useState(0);

   const tab = [
      {
         name: "Profile",
         component: Profile,
      },
      {
         name: "Settings",
         component: Settings,
      },
      {
         name: "Interest",
         component: Interest,
      },
   ]

   const ActiveTabComponent = tab[tabb].component;

   const handleNextClick = () => {
      setTabb((e)=>e+1);
   };

   const handlePrevClick = () => {
      setTabb((e)=>e-1);
   };

   const handleSubitClick = () => {
      console.log(data);
   }

   return (
      <div className='container-box'>
         <div className='tab-container'> {
            tab.map((e, idx) => {
               return (
                  <button
                     className='btn'
                     key={idx}
                     onClick={() => setTabb(idx)}
                  >
                     {e.name}
                  </button>
               )
            })
         }
         </div>
         <div className='active-component'>
            <div className='tab-body'>
               <ActiveTabComponent data={data} setData={setData} />
            </div>
         </div>

         <div className='btn-container'>
            {
               tabb > 0 && (<button onClick={handlePrevClick} className='btn btn-toggle'>Prev</button>)
            }
            {
               tabb < tab.length - 1 && (<button onClick={handleNextClick} className='btn btn-toggle'>Next</button>)
            }
            {
               tabb === tab.length - 1 && (<button onClick={handleSubitClick} className='btn btn-toggle'>Submit</button>)
            }
         </div>
      </div>
   )
}

export default Tab
