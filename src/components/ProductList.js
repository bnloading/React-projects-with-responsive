import React from 'react'
import { FaHtml5 } from 'react-icons/fa'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {filtered_products:products,grid_view}=useFilterContext();

  if (products.length<1)
  {
    <h5 style={{textTransform:"none"}}> Sorry , no products</h5>
  }
  if (grid_view===false)
  {
    return <ListView products={products}/>
  }
  return <GridView products={products}>Product List</GridView>
}

export default ProductList
