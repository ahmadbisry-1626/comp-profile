"use client"

import { sectionProps } from '@/interfaces'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { BiChevronLeft, BiChevronRight, BiChevronsLeft } from 'react-icons/bi'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import { testiContent } from '@/lib/data'
import Image from 'next/image'

const Testimonial = ({ className }: sectionProps) => {
    const [slideIndex, setslideIndex] = useState(0);
    const [isEnd, setisEnd] = useState(null);
    const [isBegin, setisBegin] = useState(null);
    const slideRef = useRef(null);

    useEffect(() => {
        setisEnd(slideRef.current.swiper.isEnd);
    })

    useEffect(() => {
        setisBegin(slideRef.current.swiper.isBegin);
    })

    const prevHandler = useCallback(() => {
        if (slideRef.current && slideRef.current.swiper) {
            slideRef.current.swiper.slidePrev();
        }
    }, [slideRef]);

    const nextHandler = useCallback(() => {
        if (slideRef.current && slideRef.current.swiper) {
            slideRef.current.swiper.slideNext();
        }
    }, [slideRef]);

    return (
        <section className={`${className} overflow-hidden`}>
            <div className='container px-4 mx-auto'>

                <div className='flex justify-center'>
                    <div className='w-full md:w-8/12 flex gap-0 items-center'>
                        <div className='text-center w-auto md:w-screen max-w-full md:max-w-xl mx-auto mb-16'>
                            <motion.span className='uppercase text-[12.5px] tracking-[3px] mb-5 inline-block text-gray-500'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.2,
                                        duration: 0.5
                                    }
                                }} viewport={{ once: true }}>
                                {testiContent.heading.subTitle}
                            </motion.span>

                            <motion.h2 className='text-2xl lg:text-4xl'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.3,
                                        duration: 0.5
                                    }
                                }} viewport={{ once: true }}>
                                {testiContent.heading.title}
                            </motion.h2>
                        </div>
                    </div>
                </div>

                <div className='lg:flex justify-start lg:justify-center'>
                    <motion.div className='w-full lg:w-10/12 lg:flex gap-0 items-center'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 0.9,
                                duration: 0.5
                            }
                        }} viewport={{ once: true }}>
                        <Swiper ref={slideRef} speed={700} spaceBetween={40} onSlideChange={(swiper) => setslideIndex(swiper.activeIndex)} className='z-50 py-32 mb-7 relative flex items-center'>
                            {testiContent.testimoninya.map((testi, i) => (
                                <SwiperSlide key={i} className='w-full'>
                                    <div className='block md:flex overflow-y-visible mt-10 items-stretch bg-white'>
                                        <div className='md:w-4/12'>
                                            <Image src={testi.img} alt='' width={370} height={320} className='object-cover object-center !h-full !w-full' />
                                        </div>

                                        <div className='md:w-8/12 p-7 md:p-16 flex items-center'>
                                            <div>
                                                <blockquote className='text-lg mb-7'>
                                                    <span className='text-[200px] leading-[0] relative text-blue-500 block'>
                                                        &ldquo;
                                                    </span>
                                                    {testi.message}
                                                </blockquote>
                                                <div className='flex space-x-3 text-sm'>
                                                    <strong>{testi.name}</strong>
                                                    <span>&mdash;</span>
                                                    <span>{testi.titleRole}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>

                <motion.div className='flex justify-center'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.3,
                            duration: 0.5
                        }
                    }} viewport={{ once: true }}>
                    <div className='flex space-x-3'>
                        <div className={`${isBegin == true ? "opacity-30 bg-gray-300 text-gray-600 !cursor-pointer" : "opacity-100 bg-blue-500 text-white"} relative top-0 group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer rounded-full inline-flex justify-center items-center`} onClick={prevHandler}>
                            <BiChevronLeft className={`${isBegin == true ? "group-hover:!text-gray-600" : "group-hover:text-white"} text-3xl text-gray-200 transition-all duration-300 ease-in-out group-hover:text-white`} />
                        </div>

                        <div className={`${isEnd == true ? "opacity-30 bg-gray-300 text-gray-600 !cursor-pointer" : "opacity-100 bg-blue-500 text-white"} relative top-0 group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer rounded-full inline-flex justify-center items-center`} onClick={nextHandler}>
                            <BiChevronRight className={`${isEnd == true ? "!text-gray-600" : "group-hover:text-white"} text-3xl text-gray-200 transition-all duration-300 ease-in-out group-hover:text-white`} />
                        </div>
                    </div>

                </motion.div>

            </div>
        </section>
    )
}

export default Testimonial