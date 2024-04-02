"use client"

import { sectionProps } from '@/interfaces'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SubsContent } from '@/lib/data'
import { BiPaperPlane } from 'react-icons/bi'


const Subscribe = ({ className }: sectionProps) => {

    return (
        <section className={`${className}`}>
            <div className='container mx-auto px-4'>
                <div className='flex justify-center'>
                    <div className='w-8/12 flex gap-0 items-center'>
                        <div className='text-center w-screen max-w-md mx-auto mb-10'>
                            <motion.span className='uppercase text-[12.5px] tracking-[3px] mb-5 inline-block text-white'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.2,
                                        duration: 0.5
                                    }
                                }} viewport={{ once: true }}>
                                {SubsContent.heading.subTitle}
                            </motion.span>

                            <motion.h2 className='text-2xl lg:text-4xl text-white'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.3,
                                        duration: 0.5
                                    }
                                }} viewport={{ once: true }}>
                                {SubsContent.heading.title}
                            </motion.h2>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <motion.form action="" className='flex relative w-auto max-w-xl mx-auto justify-center gap-5 items-center'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 0.5,
                                duration: 0.5
                            }
                        }} viewport={{ once: true }}>

                        <input type="email" className='appearance-none bg-white py-4 px-7 w-auto lg:w-screen !pr-[78px] max-w-md shadow-md rounded-full outline-none' placeholder={SubsContent.form.placeholder} required />

                        <button type='submit' className='group appearance-none absolute top-1 right-1 bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:w-28 hover:bg-blue-500 transition-all duration-200 ease-in'>
                            <span className='text-xl group-hover:-translate-x-2 transition duration-200 ease-in overflow-hidden'>
                                <BiPaperPlane />
                            </span>
                            <span className='hidden group-hover:block transition group-hover:translate-x-1 duration-300 ease-in overflow-hidden font-semibold'>
                                Submit
                            </span>
                        </button>
                    </motion.form>

                    <motion.p className='text-white w-auto max-w-md mx-auto text-center mt-10 text-opacity-60'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 0.9,
                                duration: 0.5
                            }
                        }} viewport={{ once: true }}>
                        {SubsContent.heading.description}
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default Subscribe