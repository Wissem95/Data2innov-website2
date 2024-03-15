"use client";
import React, {useEffect, useState} from 'react';
import ProductApis from "../utils/ProductApis";
import ProductList from "./ProductList";

function ProductSection() {
    const [productList,setProductList] = useState([]);
  useEffect(()=>{
      getLatestProducts_();
    },[])
    const getLatestProducts_ = () => {
      ProductApis.getLatestProducts().then(res=>{
          console.log(res.data.data);
          setProductList(res.data.data);
      })
    }
    return (
        <div className="bg-red-900 px-10 md:px-20">
            <h2 className="mb-4 pt-4">Nos Formations</h2>
            <ProductList productList={productList}/>
        </div>
    );
  }

  export default ProductSection;