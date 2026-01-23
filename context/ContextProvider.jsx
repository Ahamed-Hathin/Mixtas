import React, { createContext, useContext, useState } from 'react'
import {Products} from '../assets/assets.js'

export const MyContext=createContext()

const ContextProvider = ({children}) => {

  const [cartItems,setCartItems]=useState([])

  const[searchText, setSearchText]= useState("")

  var [ hoverIndex , setHoverIndex ] = useState("")


  const[searchResult,setSearchResult] =useState([])

  const product = Products.filter(item=> item.category != "recomended")

const toggleCart=(product)=>{
  const exits = cartItems.find(item=> item.id === product.id)

  if(exits){
    setCartItems(cartItems.filter(item=> item.id != product.id))
  }
  else{
    setCartItems([...cartItems, product])
  }



}

 const totalItem = cartItems.reduce((sum, item) => {
    return sum + parseInt(item.price.replace("₹", ""))
  }, 0)


const handleSearch=(text)=>{
 setSearchText(text)

 if(text.length === 0){
  setSearchResult([])
  return
 }



const filtered = product.filter((item)=>
item.name ?.toLowerCase().includes(text.toLowerCase()) ||
item.dec ?.toLowerCase().includes(text.toLowerCase) 
)

setSearchResult(filtered)

  

}






var contextValue ={
  cartItems,
  toggleCart,
  totalItem,
  searchText,
  handleSearch,
 searchResult , 
 hoverIndex , setHoverIndex


  

}




  return (
    <MyContext.Provider value={contextValue}>
     {children}
    </MyContext.Provider>
  )

}
export default ContextProvider