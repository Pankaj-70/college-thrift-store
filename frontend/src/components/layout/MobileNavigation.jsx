import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { Link } from "react-router-dom"
const MobileNavigation = ({ toggleNavDrawer, navDrawerOpen }) => {
    return (
        <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:hidden h-full bg-white transition-transform duration-300 shadow-lg z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className='flex justify-end'>
                <button className='p-3 w-full bg-gray-200 flex justify-end' onClick={toggleNavDrawer}>
                    <IoMdClose className='h-6 w-6 font-medium text-xl'></IoMdClose>
                </button>
            </div>
            <div className='p-4 bg-gray-200 h-full'>
                <h2 className='text-xl font-semibold mb-4 w-full underline'>Navigation Links</h2>
                <nav>
                    <Link onClick={toggleNavDrawer} className="bg-gray-200 text-gray-600 hover:text-black hover:bg-gray-300 block p-2">Men
                    </Link>
                    <Link onClick={toggleNavDrawer} className="bg-gray-200 text-gray-600 hover:text-black hover:bg-gray-300 block p-2">Women
                    </Link>
                    <Link onClick={toggleNavDrawer} className="bg-gray-200 text-gray-600 hover:text-black hover:bg-gray-300 block p-2">Top Wear
                    </Link>
                    <Link onClick={toggleNavDrawer} className="bg-gray-200 text-gray-600 hover:text-black hover:bg-gray-300 block p-2">Bottom Wear
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default MobileNavigation
