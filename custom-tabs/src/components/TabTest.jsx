
import Tabs from './Tabs'


const RahulBaba = () => {
   return(
    <>
    <div>Welcome to Devloper World</div>
    </>
   )
}

const TabTest = () => {
    const tabs = [
        {
            label:"Tab1",
            content:"hello welcome to Tab 1"
        },
        {
            label:"Tab2",
            content:"hello welcome to Tab 2"
        },
        {
            label:"Tab3",
            content: <RahulBaba/>
        }
    ]

    function onchangeHandle(currIndex){
        console.log(currIndex);
    }

  return (
    <Tabs tabsContents={tabs} onChange={onchangeHandle}/>
  )
}

export default TabTest