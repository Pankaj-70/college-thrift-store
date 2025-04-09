import React from 'react';
import { IoMdClose } from 'react-icons/io';
import CartContent from '../cart/CartContent';

const CartDrawer = ({ isDrawerOpen, toggleDrawer }) => {
    return (
        <div
            className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 flex flex-col bg-white h-full shadow-lg transform transition-transform duration-300 z-50 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div className='flex justify-end p-4'>
                <button onClick={toggleDrawer}>
                    <IoMdClose className='h-7 w-7 text-gray-700' />
                </button>
            </div>
            <div className='flex-grow overflow-y-auto p-4'>
                <h1 className='text-xl font-semibold mb-4 text-black'>Your Cart</h1>
                <CartContent></CartContent>
            </div>
            <div className='sticky bottom-0 bg-white p-4'>
                <button className='w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition'>Checkout</button>
                <p className='text-sm tracking-tighter text-gray-500 mt-2 text-center'>Shipping, taxes and discount codes calculated at checkout</p>
            </div>
        </div>
    );
};

export default CartDrawer;
