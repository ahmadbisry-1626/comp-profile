"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { allPosts } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import { sectionProps } from '@/interfaces'
import { rbContent } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'
import PostCard from './PostCard'

const RecentBlog = ({ className }: sectionProps) => {
    const post = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

    return (
        <section className={`${className}`}>
            <div className='container mx-auto px-4'>
                <div className='lg:flex justify-center mb-24'>
                    <div className='w-full lg:w-8/12 lg:flex gap-0 items-center'>

                        <div className='lg:w-7/12'>
                            <motion.span className='uppercase text-sm tracking-[3px] mb-5 inline-block text-gray-500'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.05,
                                        duration: 0.5
                                    }
                                }} viewport={{ once: true }}>
                                {rbContent.heading.subTitle}
                            </motion.span>

                            <motion.h2 className='text-2xl lg:text-4xl mb-4 lg:mb-0'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.1,
                                        duration: 0.5
                                    }
                                }} viewport={{ once: true }}>
                                {rbContent.heading.title}
                            </motion.h2>
                        </div>

                        <div className='lg:w-5/12 self-end'>
                            <motion.p className='text-gray-500'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.15,
                                        duration: 0.5
                                    }
                                }} viewport={{ once: true }}>
                                {rbContent.heading.description}
                            </motion.p>
                        </div>

                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full lg:w-10/12 mx-auto'>
                    {post.slice(0, 3).map((post, i) => (
                        <PostCard key={i} index={i} post={post}/>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default RecentBlog