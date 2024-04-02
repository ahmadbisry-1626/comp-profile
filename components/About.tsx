"use client"

import { sectionProps } from '@/interfaces'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { aboutContent } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

const About = ({ className }: sectionProps) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const img1 = useTransform(scrollYProgress, [0, 1], ['30%', '-10%'])
    const img2 = useTransform(scrollYProgress, [0, 1], ['100%', '100%'])

    return (
        <section className={`${className}`} ref={ref}>
            <div className='container px-4 mx-auto'>
                <div className='text-center lg:max-w-xl mx-auto lg:mb-22 relative z-[5]'>
                    <motion.span className='uppercase text-[12.5px] tracking-[3px] mb-5 inline-block text-gray-500'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 0.2,
                                duration: 0.5
                            }
                        }} viewport={{ once: true }}>{aboutContent.heading.subTitle}
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
                        }} viewport={{ once: true }}>{aboutContent.heading.title}
                    </motion.h2>
                </div>

                <div className='lg:flex justify-center'>
                    <div className='lg:w-8/12 lg:flex gap-20 items-center'>
                        <div className='mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative'>
                            <motion.div className='z-[2] relative' style={{ y: img1 }}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              transition: {
                                delay: 0.4,
                                duration: 0.5
                              }
                            }} viewport={{ once: true }}>
                                <Image src='/images/img-square-2-min.jpg' alt='' width={400} height={600} className='object-cover !w-full !h-[550px] lg:max-w-2xl object-center' />
                            </motion.div>

                            <motion.div className='absolute bottom-0 lg:bottom-[200px] -left-[100px] z-[1]'
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        delay: 0.4,
                                        duration: 0.5,
                                    }
                                }} viewport={{ once: true }} style={{ y: img2 }}>
                                <Image src='/images/dots.svg' alt='' width={200} height={200} className='w-64' />
                            </motion.div>
                        </div>

                        <div className='lg:w-6/12 lg:pt-0 pt-4'>
                            <motion.h3 className='text-2xl mb-7 text-gray-800'
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.2,
                                        duration: 0.5,
                                    }
                                }} viewport={{ once: true }}>
                                {aboutContent.content.title}
                            </motion.h3>

                            <motion.p className='leading-relaxed mb-14 text-gray-500'
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        delay: 0.4,
                                        duration: 0.5,
                                    }
                                }} viewport={{ once: true }}>
                                {aboutContent.content.description}
                            </motion.p>

                            <motion.p className=''
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        delay: 0.5,
                                        duration: 0.5,
                                    }
                                }} viewport={{ once: true }}>
                                <Link href={aboutContent.content.btn.href}
                                    className='transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-blue-500 py-4 px-5 rounded-lg text-white inline-block hover:bg-white hover:text-blue-500 hover:shadow-2xl'>
                                    {aboutContent.content.btn.label}
                                </Link>
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About