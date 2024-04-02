"use client"

import { sectionProps } from '@/interfaces'
import React from 'react'
import { motion } from 'framer-motion'
import {
    BiHardHat,
    BiPaintRoll,
    BiNote,
    BiBulb,
    BiLayer,
    BiOutline
} from 'react-icons/bi'
import { howitworksContent } from '@/lib/data'
import Link from 'next/link'

const HowItWorks = ({ className }: sectionProps) => {
    return (
        <>
            <section className={`${className}`}>
                <div className='container px-4 mx-auto'>
                    <div className='lg:flex justify-center mb-20 lg:mb-36'>
                        <div className='w-full lg:w-8/12 lg:flex gap-0 items-center'>
                            <div className='lg:w-7/12 mb-5 lg:mb-0'>
                                <motion.span className='uppercase text-sm tracking-[3px] mb-5 inline-block text-gray-500'
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: 0.2,
                                            duration: 0.5
                                        }
                                    }} viewport={{ once: true }}>
                                    {howitworksContent.heading.subTitle}
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
                                    {howitworksContent.heading.title}
                                </motion.h2>
                            </div>

                            <div className='lg:w-5/12 self-end'>
                                <motion.p className='text-gray-500'
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: 0.6,
                                            duration: 0.5
                                        }
                                    }} viewport={{ once: true }}>
                                    {howitworksContent.heading.description}
                                </motion.p>
                            </div>
                        </div>
                    </div>

                    <div className='grid xl:grid-cols-3 grid-cols-1 gap-5 -mb-72 lg:w-10/12 mx-auto'>
                        {howitworksContent.steps.map((step, i) => (
                            <motion.div key={i} className='group duration-300 pt-32 pl-10 pr-10 pb-20 bg-white relative overflow-hidden hover:bg-yellow-500 hover:shadow-2xl rounded-lg'
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.2,
                                        duration: 0.5
                                    }
                                }} viewport={{ once: true }} whileHover={{ y: -10 }}>
                                <span className='text-[200px] inline-block z-[1] font-semibold absolute -top-[120px] opacity-5 left-0 leading-0'>
                                    {step.number}
                                </span>

                                <div className='absolute top-10 right-10'>
                                    <span className='text-3xl text-blue-500 duration-300 transition-all ease-in-out group-hover:text-white'>
                                        <step.icon />
                                    </span>
                                </div>

                                <div className='relative flex z-40 gap-3 items-start'>
                                    <div className='font-semibold duration-300 transition-all ease-in-out group-hover:text-white group-hover:text-opacity-50'>
                                        {step.number}
                                    </div>

                                    <div className=''>
                                        <h3 className='text-[18px] mb-4 duration-300 transition-all ease-in-out group-hover:text-white'>
                                            {step.title}
                                        </h3>

                                        <p className='leading-relaxed text-[15px] text-gray-500 mb-7 duration-300 transition-all ease-in-out group-hover:text-white'>
                                            {step.description}
                                        </p>

                                        <Link href={step.btn.href} className='text-[12px] uppercase tracking-[2px] border-b-2 pb-2 inline-block border-blue-500 duration-300 transition-all ease-in-out group-hover:border-white group-hover:text-white'>
                                            {step.btn.label}
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='pt-72 lg:pt60 pb-32 bg-blue-500'>
                <div className='container px-4 mx-auto'>
                    <div className='lg:flex justify-center'>
                        <div className='w-full lg:w-8/12 flex gap-0 items-center'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                                {howitworksContent.features.map((feature, i) => (
                                    <motion.div key={i} className='relative z-40 flex gap-3 items-start'
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                delay: 0.2,
                                                duration: 0.5
                                            }
                                        }} viewport={{ once: true }}>
                                        <div>
                                            <span className='text-3xl text-white'>
                                                <feature.icon />
                                            </span>
                                        </div>

                                        <div>
                                            <h3 className='text-lg mb-4 text-white'>
                                                {feature.title}
                                            </h3>

                                            <p className='leading-relaxed text-[15px] text-white text-opacity-75 mb-7'>
                                                {feature.description}
                                            </p>

                                            <Link href={feature.btn.href} className='text-[12px] uppercase tracking-[2px] border-b-2 pb-2 inline-block border-white text-white border-opacity-25 duration-300 transition-all ease-in-out hover:border-opacity-100'>
                                                {feature.btn.label}
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowItWorks