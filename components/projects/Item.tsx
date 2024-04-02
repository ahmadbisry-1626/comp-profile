import { projectContent } from '@/lib/data'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { projectProops } from '@/interfaces'

const Item = ({curItems}: projectProops) => {
  return (
    <>
            {curItems && projectContent.map((project, i) => {
                return (
                    <motion.div key={i} className='relative overflow-hidden w-full lg:w-6/12 p-2 group'
                    initial={{opacity: 0, y:20}}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.05,
                            duration: 0.3
                        }
                    }} viewport={{once: true}}>
                        
                        <Link href={project.url} className='overflow-hidden block relative'>
                            <Image src={project.img} alt='' width={1064} height={644} className='object-cover object-center h-[400px] !max-w-full duration-300 transition-all ease-in-out group-hover:scale-[1.05]'/>
                        </Link>

                        <div className='py-8 px-2 bg-white'>
                            <span className='block mb-1 text-gray-500'>
                                {project.subTitle}
                            </span>

                            <h3 className='mb-4'>
                                <Link href={project.url} className='text-2xl leading-none'>
                                    {project.title}
                                </Link>
                            </h3>
                        </div>
                    </motion.div>
                )
            })}
        </>
  )
}

export default Item