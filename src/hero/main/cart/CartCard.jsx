


const CartCard = ({product, deleteSelectedCart}) => {
    //console.log(product)
    return (
        
            <div className=' flex gap-6 items-center justify-between p-5 rounded-2xl bg-[#F2F2F2]'> 
                <div className='flex gap-4 items-center'>
                    <span className="bg-white rounded-full"><img className='h-20 w-auto p-5' src={product.icon} alt="" /></span>
                    <div>
                        <h2 className='flex items-center gap-2 font-semibold text-xl'>{product.name}</h2>
                        <p className=" text-gray-500">${product.price}</p>
                    </div>
                </div>
                <div>
                    <button className='btn text-red-500' onClick={() => deleteSelectedCart(product)}>Remove</button>
                </div>
            </div>
        
    );
};

export default CartCard;