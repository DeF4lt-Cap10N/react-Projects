import MenuList from './MenuList'

const Tree = ({menus = []}) => {
   return (
      <>
      <div style={{backgroundColor:"grey" , width:"400px"}}>
         <MenuList list = {menus}/>
      </div>
      </>
   )
}

export default Tree