"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { heroContent } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { sectionProps } from '@/interfaces';

const Hero = ({ className }: sectionProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })
    const imgScroll1 = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])
    const imgScroll2 = useTransform(scrollYProgress, [0, 1], ['100%', '50%'])

    return (
        <section className={`${className}`} ref={ref}>
            <div className='container px-4 mx-auto'>
                <div className='lg:flex w-full lg:w-10/12 mx-auto h-auto lg:h-screen lg:min-h-[700px] items-center justify-between'>
                    <div className='lg:w-4/12 z-[3] relative'>
                            <motion.span className='uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-gray-500'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1, y: 0, transition: {
                                        delay: 0.2, duration: 0.5
                                    }
                                }} viewport={{ once: true }}>
                                {heroContent.intro.subTitle}
                            </motion.span>
                        
                            <motion.h1 className='text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-auto lg:w-screen max-w-xl mb-4 md:mb-8'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1, y: 0, transition: {
                                        delay: 0.2, duration: 0.5
                                    }
                                }} viewport={{ once: true }}>
                                {heroContent.intro.title}
                            </motion.h1>
                        
                            <motion.p className='leading-relaxed text-gray-500 w-auto lg:w-screen max-w-xl text-base lg:text-lg mb-10 lg:mb-16'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1, y: 0, transition: {
                                        delay: 0.3, duration: 0.5
                                    }
                                }} viewport={{ once: true }}>
                                {heroContent.intro.description}
                            </motion.p>
                        
                            <motion.p initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1, y: 0, transition: {
                                        delay: 0.3, duration: 0.5
                                    }
                                }} viewport={{ once: true }}>

                                <Link href={heroContent.intro.btn.href}
                                    className='transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-blue-500 py-4 px-5 rounded-lg text-white inline-block hover:bg-white hover:text-blue-500 hover:shadow-2xl'>
                                    {heroContent.intro.btn.label}
                                </Link>
                            </motion.p>
                    </div>

                    <div className='lg:w-7/12 relative'>
                        <motion.div className='z-[2] relative bg-cover bg-center'
                        initial={{opacity: 0, x: 20}}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 0.4,
                                duration: 0.5,
                            }
                        }} viewport={{once: true}} style={{y: imgScroll1}}>
                            <Image src='/images/hero-img-1-min.jpg' alt='' width={828} height={985}/>
                        </motion.div>

                        <motion.div className='absolute bottom-0 lg:bottom-[200px] -left-[100px] z-[1]'
                        initial={{opacity: 0, x: -30}}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 0.4,
                                duration: 0.5,
                            }
                        }} viewport={{once: true}} style={{y: imgScroll2}}>
                            <Image src="/images/dots.svg" alt='' width={200} height={200} className='w-64'/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero