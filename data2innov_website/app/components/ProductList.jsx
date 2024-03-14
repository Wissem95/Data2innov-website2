import React from "react";
import ProductItem from "@/app/components/ProductItem";

function ProductList({productList}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {productList.map(item=>(
        <div key={item.id}><ProductItem product={item} /></div>
    ))}
    </div>
  )
}

export default ProductList;