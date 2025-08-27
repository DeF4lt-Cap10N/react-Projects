/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {Minus, Plus} from "lucide-react"

const Counter = () => {
    const [history, setHistory] = useState([0]);
    const [current, setCurrent] = useState(0);

    const currValue = history[current];

  return (
    <>
        <div className='flex flex-col justify-center items-center'>
            <div>{current}</div>
            <div className='flex  gap-10'>
               <Minus/>
              <Plus/>
            </div>
        </div>
    </>

  )
}

export default Counter