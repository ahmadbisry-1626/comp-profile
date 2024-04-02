import { sectionProps } from '@/interfaces'
import { footerContent } from '@/lib/data'
import Link from 'next/link'
import React from 'react'
import { BiSolidHeart } from 'react-icons/bi'

const Footer = ({ className }: sectionProps) => {
    return (
        <footer className={`${className} overflow-hidden w-full h-full relative pl-10 z-[1]`}>
            <div className='container mx-auto px-4 z-20 relative'>
                <div className='md:flex'>

                    <div className='md:w-4/12 mb-10 md:mb-0'>
                        <Link href='/' className='text-[22px] text-gray-800 font-bold'>
                            Kanabagi<span className='text-blue-500 text-2xl'>.</span>
                        </Link>
                    </div>

                    <div className='md:w-8/12'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                            {footerContent.footerLinks.map((link, i) => (
                                <div key={i} className='mb-10 md:mb-0'>
                                    <h3 className='text-gray-800 mb-3 font-semibold'>
                                        {link.heading}
                                    </h3>

                                    <ul className='list-none'>
                                        <li className='flex flex-col gap-2'>
                                            {link.links.map((item) => (
                                                <Link href={item.href} className={`${item.badge ? "flex gap-2 items-center" : ""} text-gray-400 duration-300 transition-all ease-in-out hover:text-blue-500`}>
                                                    {item.badge ? (<>
                                                        <span>
                                                            {item.label}
                                                        </span>
                                                        <span className='py-0.5 px-2 rounded-full border border-blue-500 text-blue-500 text-[10px] font-semibold'>
                                                            {item.badge}
                                                        </span>
                                                    </>) : (item.label)}
                                                </Link>
                                            ))}
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='pt-7 mt-7 md:pt-7 border-t-2 border-gray-100 text-center text-gray-500'>
                    <p className='text-center flex items-center justify-center mx-auto text-sm'>
                        <span>&copy; 2023 <Link href='' className='text-blue-500'>Kanabagi</Link>. All rights reserved. Created with</span><BiSolidHeart className='text-red-500 mx-1 inline-block text-[18px]' />
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer