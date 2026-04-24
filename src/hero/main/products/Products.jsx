import React from 'react';
import Card from './Card';

const Products = ({products, buyProduct, setBuyProduct, price, setPrice}) => {
    //console.log(products)
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {products.map(product => {
                //console.log(product)
                return <Card key={product.id} product={product} buyProduct={buyProduct} setBuyProduct={setBuyProduct} price={price} setPrice={setPrice}></Card>
            })} 
             
        </div>
    );
};

export default Products;