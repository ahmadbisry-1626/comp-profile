"use client"

import { sectionProps } from '@/interfaces'
import React from 'react'
import { motion } from 'framer-motion'
import { RxTwitterLogo } from 'react-icons/rx'
import { SlSocialLinkedin } from 'react-icons/sl'
import { aboutTeam } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'

const Team = ({ className }: sectionProps) => {
    return (
        <section className={`${className}`}>
            <div className='container mx-auto px-4'>
                <div className='lg:flex justify-center mb-20 lg:mb-36'>
                    <div className='w-full lg:w-8/12 lg:flex gap-7 items-center'>
                        <div className='lg:w-7/12 mb-5 lg:mb-4'>
                            <motion.span className='uppercase tracking-[3px] text-sm mb-4 inline-block text-gray-500'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.2,
                                        duration: 0.5
                                    }
                                }} viewport={{ once: true }}>
                                {aboutTeam.heading.subTitle}
                            </motion.span>

                            <motion.h2 className='text-2xl lg:text-4xl'
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.3,
                                        duration: 0.5
                                    }
                                }} viewport={{ once: true }}>
                                {aboutTeam.heading.title}
                            </motion.h2>
                        </div>

                        <div className='lg:w-5/12 self-end'>
                            <motion.p className='text-gray-500 leading-relaxed'
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.5,
                                        duration: 0.6
                                    }
                                }} viewport={{ once: true }}>
                                {aboutTeam.heading.description}
                            </motion.p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-auto lg:w-10/12'>
                    {aboutTeam.team.map((item, i) => (
                        <motion.div key={i} className='bg-white relative overflow-hidden shadow-md'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.2,
                                    duration: 0.3
                                }
                            }} viewport={{ once: true }}>
                            <Link href='#'>
                                <Image src={item.image} alt='' width={400} height={400} className='object-cover object-top w-full !max-h-84 !max-w-full' />
                            </Link>

                            <div className='p-8'>
                                <h3 className='mb-0.5 font-semibold'>
                                    {item.name}
                                </h3>
                                <p className='text-gray-500 uppercase text-[12px] tracking-[1px] mb-4'>
                                    {item.titleRole}
                                </p>

                                <div className='mt-5 flex space-x-5 items-center'>
                                    <Link href={item.twitter} className='duration-300 transition-all ease-in-out hover:opacity-30'>
                                        <RxTwitterLogo className="text-xl" />
                                    </Link>
                                    <Link href={item.linkedin} className='duration-300 transition-all ease-in-out hover:opacity-30'>
                                        <SlSocialLinkedin className="text-xl" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team