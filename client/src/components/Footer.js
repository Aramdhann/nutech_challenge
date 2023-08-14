import React from "react";
import { ImGithub } from "react-icons/im";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
} from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { logoShopping, paymentLogo } from "../assets";

const Footer = () => {
    return (
        <div className='bg-black text-[#949494] py-20 font-titleFont'>
            <div className='max-w-screen-xl mx-10 grid grid-cols-3 gap-4 place-content-center'>
                <div className='flex flex-col gap-7'>
                    <img className='w-32' src={logoShopping} alt='logo' />
                    <p className='text-white text-sm tracking-wide'>
                        © online-shopping.com
                    </p>
                    <img className='w-56' src={paymentLogo} alt='paymentLogo' />
                    <div className='flex gap-5 text-lg text-gray-400'>
                        <ImGithub className='hover:text-white duration-300 cursor-pointer' />
                        <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
                        <FaFacebookF className='hover:text-white duration-300 cursor-pointer' />
                        <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
                        <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold text-white mb-4'>
                        Location
                    </h2>
                    <div className='text-base flex flex-col gap-2'>
                        <p> Surabaya, East Java, Indonesia </p>
                        <p>Mobile: +62 81515898847</p>
                        <p>E-Mail: radityamohcamad@gmail.com</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold text-white mb-4'>
                        Profile
                    </h2>
                    <div className='text-base flex flex-col gap-2'>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span className='text-lg'>
                                <BsPersonFill />
                            </span>
                            My Account
                        </p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span className='text-lg'>
                                <BsPaypal />
                            </span>
                            Checkout
                        </p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span className='text-lg'>
                                <FaHome />
                            </span>
                            Order Tracking
                        </p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span className='text-lg'>
                                <MdLocationOn />
                            </span>
                            Help & Support
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center py-10'>
                <p className='flex items-center gap-1'>
                    Made With
                    <span className='hover:text-white duration-300 cursor-pointer'>
                        <AiOutlineHeart />
                    </span>
                    By Moch. Raditya Aulya Aramdhan © 2023
                </p>
            </div>
        </div>
    );
};

export default Footer;
