import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isMenu, setIsmMenu] = useState(false);

    const toggleMenu = () => {
        setIsmMenu(!isMenu)
    }

    return (
        <div className='w-full bg-red bg-gray-200 position-fixed top-0 flex flex-col'>
            <div className='flex items-center justify-between px-8 py-4'>
                <div>
                    <p className='text-2xl font-semibold text-[#DC73B6]'>Logo</p>
                </div>
                <div className='hidden md:flex items-center justify-between gap-8'>
                    <p>
                        <Link to="/">Home</Link>
                    </p>
                    <p>
                        <Link to="/shop">Features</Link>
                    </p>
                    <p>
                        <Link to="/product">About Us</Link>
                    </p>
                    <div className='flex items-center gap-2'>
                        <Link to="/contact">Resources</Link>
                        <IoIosArrowDown />
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                        <button className={`px-4 py-2 rounded-xl ${isMenu ? 'bg-[#0B0A0A] text-white' : 'hidden md:flex'} bg-white`}>Join</button>
                    </div>
                    <div className='flex md:hidden'>
                        <button className='text-xl' onClick={() => toggleMenu()}>
                            {
                                isMenu ? <RxCross1 /> : <IoIosMenu />
                            }
                        </button>
                    </div>
                </div>
            </div>
            {
                isMenu && <Menu />
            }
        </div>
    )
}

export default Navbar

export const Menu = () => {
    return (
        <>
            <span className="bg-white w-full p-4 flex flex-col items-start justify-between gap-6 text-xl">
                <p>
                    <Link to="/">Home</Link>
                </p>
                <p>
                    <Link to="/shop">Features</Link>
                </p>
                <p>
                    <Link to="/product">About Us</Link>
                </p>
                <div className='flex items-center gap-2'>
                    <Link to="/contact">Resources</Link>
                    <IoIosArrowDown />
                </div>
            </span>
        </>
    );
};