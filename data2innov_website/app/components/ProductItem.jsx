import React from "react";
import Image from "next/image";

function ProductItem({product}) {
    return (
        <div className="p-1 max-w-[410px]  hover:border hover:shadow-md rounded-lg  hover:cursor-pointer">
            <Image className="h-[200px] object-cover rounded-t-lg" src={product?.attributes?.banner?.data?.attributes?.url} alt="banner-card" width={400} height={350} />

            <div className="p-3 flex items-center justify-between bg-gray-800">
                <div className="">
                <h2 className="text-2xl font-sans line-clamp-1">{product?.attributes?.title}</h2>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;