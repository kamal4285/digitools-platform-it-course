import React from 'react';
import CartCard from './CartCard';

const Cart = ({products, buyProduct, setBuyProduct, price, setPrice}) => {
    console.log(products)
    //console.log(buyProduct)

    const deleteSelectedCart = (product) => {
        const filteredProduct = buyProduct.filter(buyProduct => buyProduct.name != product.name)
        //console.log(filteredProduct);
        setBuyProduct(filteredProduct);
        setPrice(price - product.price);
    }

    return (
        <div className='w-full space-y-5'>
           {buyProduct.length === 0 ?
           <div className='h-400px flex flex-col items-center justify-center'>
                <h2 className='font-semibold text-xl'>No tools selected yet</h2>
                <p >Go to products tab for select tools</p>
           </div>
           : buyProduct.map(product => {
                return <CartCard key={product.id} product={product} deleteSelectedCart={deleteSelectedCart}></CartCard>
           })
            }

           {buyProduct.length >= 1 ? 
           <div>
                 <div className='flex justify-between'>
                <h2>Total</h2>
                <h1>${price}</h1>
            </div>
           <button className='btn btn-block text-lg text-white rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Proceed to checkout</button>
           </div> 
           : <div className='text-xl text-center'>Thanks</div> }
        </div>

    );
};

export default Cart;