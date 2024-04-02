"use client"

import { sectionProps } from '@/interfaces'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BiArch, BiHardHat, BiSolidUser } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { aboutWhyUs } from '@/lib/data'
import Image from 'next/image'
import { img2 } from '@/public/images'

const WhyUs = ({ className }: sectionProps) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const image1 = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"])

  return (
    <section className={`${className}`}>
      <div className='container mx-auto px-4'>
        <div className='text-center lg:max-w-xl mx-auto mb-20 lg:mb-32'>
          <motion.span className='uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-gray-500'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.2,
                duration: 0.5
              }
            }} viewport={{ once: true }}>
            {aboutWhyUs.heading.subTitle}
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
            {aboutWhyUs.heading.title}
          </motion.h2>
        </div>

        <div className='lg:flex justify-center'>
          <div className='lg:w-8/12 lg:flex gap-20 items-center'>
            <div className='mb-20 lg:mb-0 lg:w-6/12 lg:order-2'>
              <motion.div style={{ y: image1 }}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.6,
                    duration: 0.5
                  }
                }} viewport={{ once: true }}>
                <Image src={img2} alt='' width={400} height={300} className='object-cover !w-full h-[500px] lg:max-w-2xl object-center' />
              </motion.div>
            </div>

            <div className='lg:w-6/12'>
              <motion.ul className='list-none'
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.9,
                    duration: 0.5
                  }
                }} viewport={{ once: true }}>
                {aboutWhyUs.whyUsItems.map((item, i) => (
                  <li key={i} className='flex space-x-4 items-start mb-7'>
                    <span className='text-xl grow-0 flex-none inline-flex justify-center items-center w-12 h-12 rounded-full relative bg-blue-500'>
                      <item.icon className="z-20 relative text-white" />
                    </span>
                    <div>
                      <h3 className='text-gray-800 font-semibold text-base mb-2'>
                        {item.title}
                      </h3>
                      <p className='text-gray-500'>
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs