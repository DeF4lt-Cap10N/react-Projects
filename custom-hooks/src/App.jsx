import React from 'react'
import UseFetchTest from './components/useFetch/UseFetchTest'
import {UseOnclickOutsideHook} from "./components/useOnclickOutsideHook/Test.jsx"

const App = () => {
  return (
    <div>
      {/* useFtech custom Hook */}
      {/* <UseFetchTest/> */}
      <UseOnclickOutsideHook/>
    </div>
  )
}

export default App