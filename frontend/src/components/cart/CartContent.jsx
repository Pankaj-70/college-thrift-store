import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'
const CartContent = () => {
    const cartProducts = [
        {
            productId: 1,
            name: "T-Shirt",
            size: "M",
            color: "Red",
            quantity: 1,
            price: 15,
            image: "https://picsum.photos/200?random=1"
        },
        {
            productId: 2,
            name: "Jeans",
            size: "L",
            color: "Blue",
            quantity: 5,
            price: 25,
            image: "https://picsum.photos/200?random=1"
        }
    ]
    return (
        <div className='text-black'>
            {
                cartProducts.map((product, index) => {
                    return (<div key={index} className='flex items-start justify-around text-sm py-4 border-b'>
                        <div className='flex items-start '>
                            <img src={product.image} alt={product.name} className='h-24 w-20 object-cover rounded' />
                        </div>
                        <div>
                            <h3>{product.name}</h3>
                            <p className='text-sm text-gray-700'>
                                Size: '{product.size}' | Color: '{product.color}'
                            </p>
                            <div className='flex items-center mt-2'>
                                <button className='border rounded px-2 text-xl font-medium'>-</button>
                                <span className='mx-4'>{product.quantity}</span>
                                <button className='border rounded px-2 text-[1.14rem] font-medium'>+</button>
                            </div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <p>${product.price}</p>
                            <button>
                                <RiDeleteBin3Line className='h-4 w-4 mt-2 text-red-600' />
                            </button>
                        </div>
                    </div>)
                })
            }
        </div>
    )
}

export default CartContent
