import { contentlayerProps } from '@/interfaces'
import { compareDesc, format, parseISO } from 'date-fns'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostCard = ({ index, post }: contentlayerProps) => {
    index *= 0.05;

    return (
        <motion.div className='bg-white relative overflow-hidden group'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    delay: index,
                    duration: 0.5
                }
            }} viewport={{ once: true }}>
            <Link href={post.url} className='relative block overflow-hidden'>
                <Image src={post.image} alt='' width={1064} height={644} className='object-cover object-center h-[200px] duration-300 transition-all ease-in-out group-hover:scale-105'/>
            </Link>

            <div className='p-8'>
                <p className='text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]'>
                    {format(parseISO(post.date), "LLL d, yyyy")} &#8226; {post.author}
                </p>

                <h3 className='mb-4'>
                    <Link href={post.url} className='text-lg leading-normal'>
                        {post.title}
                    </Link>
                </h3>

                <p className='pt-5'>
                    <Link href={post.url} className='text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-blue-500'>
                        Read More
                    </Link>
                </p>
            </div>
        </motion.div>
    )
}

export default PostCard