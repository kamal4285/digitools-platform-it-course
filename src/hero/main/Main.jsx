import React, { use, useState } from 'react';
import Products from './products/Products';
import Cart from './cart/Cart';




const Main = ({productPromise}) => {

    const products = use(productPromise);
    //console.log(products)
    
    const [selectedType, setSelected] = useState('products');

    const [buyProduct, setBuyProduct] = useState([]);

    const [price, setPrice] = useState(0);

    return (
        <div className='container mx-auto flex flex-col items-center my-16 space-y-4'>
            <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
            <p className='text-lg text-gray-600 text-center'>Choose from our curated collection of premium digital products designedto <br /> boost your productivity and creativity.</p>
            <div className='flex gap-4'>
                <button onClick={() => setSelected('products')} className={`btn rounded-3xl ${selectedType === "products" ? "text-white bg-linear-to-r from-blue-600 to-purple-500" : "btn"}`}>Products</button>
                <button onClick={() => setSelected('cart')} className={`btn rounded-3xl ${selectedType === "cart" ? "text-white bg-linear-to-r from-blue-600 to-purple-500" : "btn"}`}>Cart ({buyProduct.length})</button>

                

            </div>
            <div className='my-10'>
                {selectedType === 'products' ? <Products products={products} setBuyProduct={setBuyProduct} buyProduct={buyProduct} price={price} setPrice={setPrice}></Products> : <Cart products={products} buyProduct={buyProduct} setBuyProduct={setBuyProduct} price={price} setPrice={setPrice}></Cart>}
            </div>
        </div>
    );
};

export default Main;