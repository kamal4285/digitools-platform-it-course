


const CartCard = ({product, deleteSelectedCart}) => {
    //console.log(product)
    return (
        <div>
            <div className='w-full flex items-center gap-6 justify-between p-5 rounded-2xl bg-[#F2F2F2]'> 
                <div className='flex gap-4 items-center'>
                    <img className='h-20 w-auto' src={product.icon} alt="" />
                    <div>
                        <h2 className='flex items-center gap-2 font-semibold text-xl'>{product.name}</h2>
                        <p>${product.price}</p>
                    </div>
                </div>
                <button className='btn text-red-500' onClick={() => deleteSelectedCart(product)}>Remove</button>
            </div>
        </div>
    );
};

export default CartCard;