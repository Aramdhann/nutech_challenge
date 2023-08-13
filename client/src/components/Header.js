import React from "react";
import { userIcon, cartImg, logoShopping } from "../assets/index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const productData = useSelector((state) => state.olshop.productData);
    const userInfo = useSelector((state) => state.olshop.userInfo);
    return (
        <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
            <div className='max-w-screen-xl h-full mx-10 flex items-center justify-between'>
                <Link to='/'>
                    <div>
                        <img
                            src={logoShopping}
                            alt='logoDark'
                            width='60'
                            height='60'
                        />
                    </div>
                </Link>
                <div className='flex items-center gap-8'>
                    <ul className='flex items-center gap-8'>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                            <a href='/'>Shopping</a>
                        </li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                            <a href='/'>Blog</a>
                        </li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                            <a href='/'>About</a>
                        </li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                            <a href='/'>Contact</a>
                        </li>
                    </ul>
                    <Link to='/cart'>
                        <div className='relative'>
                            <img className='w-6' src={cartImg} alt='cartImg' />
                            <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont'>
                                {productData.length}
                            </span>
                        </div>
                    </Link>
                    <Link to='/login'>
                        <img
                            className='w-8 h-8 rounded-full'
                            src={userInfo ? userInfo.image : userIcon}
                            alt='userLogo'
                        />
                    </Link>
                    {userInfo && (
                        <p className='text-base font-titleFont font-semibold underline underline-offset-2'>
                            {userInfo.name}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
