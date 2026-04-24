import React, { useState } from 'react';
import Features from './features/Features';



const Card = ({product, buyProduct,setBuyProduct, price, setPrice}) => {
    //console.log(product)
 
const [buyStatus, setBuyStatus] = useState(false);

const handleBuy = () => {
    
    setPrice(price + product.price);
    setBuyStatus(true);
    setBuyProduct([...buyProduct, product])
}

    return (
        <div className=" card bg-base-100 shadow-sm ">
                <div className="card-body">
                    <div className='flex justify-end'>
                        <span className={`badge badge-xl text-lg rounded-3xl ${product.tagType === "popular" ? "bg-[#FEF3C6] text-[#BB4D00]" : product.tagType === "best seller" ? "bg-[#E1E7FF] text-[#4F39F6]" : "bg-[#DBFCE7] text-[#0A883E]"} ` }>{product.tagType}</span>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center        justify-center shadow-sm">
                        <img src={product.icon} className="w-8 h-8" />
                    </div>
                 
                    <div className="">
                    <h2 className="text-3xl font-bold">{product.name}</h2>
                    <p className='text-[16px] text-[#627382]'>{product.description}</p>
                    <span className="text-xl">${product.price}/{product.period}</span>
                    </div>
                    
                    {product.features.map((feature, index) => {
                        return <Features key={index} feature={feature}></Features>
                    })}
                    
                    
                    <div className="mt-6">
                    <button className="btn btn-block text-lg text-white rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA]" onClick={handleBuy} disabled={buyStatus === true ? true : false}>{buyStatus === true ? "Added to cart" : "Buy Now"}</button>
                    </div>
                </div>
            </div> 
    );
};

export default Card;