"use client"

import { sectionProps } from '@/interfaces'
import React from 'react'
import { motion } from 'framer-motion'
import { aboutStoryContent } from '@/lib/data'
import Image from 'next/image'

const Story = ({ className }: sectionProps) => {
  return (
    <section className={`${className}`}>
      <div className='container mx-auto px-4'>
        <div className='md:flex w-full md:w-10/12 mx-auto items-stretch md:gap-7'>
          <div className='md:w-4/12 self-center space-y-7 mb-7 md:mb-0'>
            {aboutStoryContent.column1.imgs.map((img, i) => {
              return (
                <motion.div className='' key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.5,
                      duration: 0.5,
                    }
                  }} viewport={{ once: true }}>
                  <Image src={img.img} alt={img.alt} width={img.width} height={img.height} className={`${img.tailwindCSS ? img.tailwindCSS : ''} max-w-full object-cover object-center`} />
                </motion.div>
              )
            })}
          </div>

          <div className='md:w-4/12 space-y-7 mb-7 md:mb-0'>
            {aboutStoryContent.column2.imgs.map((img, i) => {
              return (
                <motion.div className='' key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.6,
                      duration: 0.5,
                    }
                  }} viewport={{ once: true }}>
                  <Image src={img.img} alt={img.alt} width={img.width} height={img.height} className={`${img.tailwindCSS ? img.tailwindCSS : ''} max-w-full object-cover object-center`} />
                </motion.div>
              )
            })}
          </div>

          <div className='md:w-4/12 self-center space-y-7'>
            {aboutStoryContent.column3.imgs.map((img, i) => {
              return (
                <motion.div className='' key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.7,
                      duration: 0.5,
                    }
                  }} viewport={{ once: true }}>
                  <Image src={img.img} alt={img.alt} width={img.width} height={img.height} className='max-w-full object-cover object-center' />
                </motion.div>
              )
            })}
          </div>

        </div>

        <motion.div className='lg:flex flex-col mt-32 text-left w-full lg:w-6/12 mx-auto'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.7,
              duration: 0.5,
            }
          }} viewport={{ once: true }}>
          <h2 className='text-2xl md:text-3xl text-gray-800 mb-5'>
            {aboutStoryContent.storyText.heading}
          </h2>

          <p className='text-gray-500 mb-7 leading-relaxed'>
            {aboutStoryContent.storyText.p1}
          </p>
          <p className='text-gray-500 mb-10 leading-relaxed'>
            {aboutStoryContent.storyText.p2}
          </p>

          <p>
            <Image src={aboutStoryContent.storyText.signature} alt='' width={338} height={113} className='w-48 block mb-2' />

            <strong className='block mb-2 text-gray-800 font-medium'>
              {aboutStoryContent.storyText.name} <span className='text-gray-400'> {aboutStoryContent.storyText.roleTitle}</span>
            </strong>
          </p>

        </motion.div>
      </div>
    </section>
  )
}

export default Story