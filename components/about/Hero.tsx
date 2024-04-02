'use client'

import { sectionProps } from '@/interfaces'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = ({ className, title, subTitle }: sectionProps) => {
    return (
        <section className={`${className}`}>
            <div className='container mx-auto px-4'>
                <div className='lg:flex w-full lg:w-10/12 mx-auto items-center justify-between'>
                    <div className='text-center max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto'>
                        <motion.span className='uppercase tracking-[3px] text-[12.5px mb-5 inline-block text-gray-500]'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.03,
                                    duration: 0.5
                                }
                            }} viewport={{ once: true }}>
                            {subTitle}
                        </motion.span>

                        <motion.h1 className='text-3xl lg:text-5xl md:text-4xl'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.06,
                                    duration: 0.5
                                }
                            }} viewport={{ once: true }}>
                            {title}
                        </motion.h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero