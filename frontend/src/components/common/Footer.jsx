import React from 'react'

const Footer = () => {
    return (
        <div className='border-t py-12'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0'>
                <h3 className='text-lg text-gray-800 mb-4'>Newsletter</h3>
                <p className='text-gray-500 mb-4'>Be the first to hear about our new products, exclusive events and online offers.</p>
                <p>Sign up and get 10% off on your first order.</p>
                <form className='flex'>
                    <input type="email" placeholder="Enter your email" className='focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-l border-t text-sm w-full transition-all' required/>
                    <button type="submit" className="bg-black text-white hover:bg-gray-800 p-4">Subscribe</button>
                </form>
            </div>

        </div>
    )
}

export default Footer
