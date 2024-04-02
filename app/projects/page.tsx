import CTA from '@/components/CTA'
import Hero from '@/components/about/Hero'
import Project from '@/components/projects/Project'
import React from 'react'

const page = () => {
    return (
        <>
            <Hero className='pt-52 pb-24' title='Projects' subTitle='Our Projects' />
            <Project className='pt-0 pb-52' itemsPerPage={4} />
            <CTA className='py-32 lg:py-32 bg-blue-500' ctaLabel='Get in touch' ctaLink='/contact' title='Do you have project in mind?' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quos in neque facilis reprehenderit maiores alias, minus non explicabo cupiditate.'/>
        </>
    )
}

export default page