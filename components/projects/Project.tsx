"use client"

import { projectProops } from '@/interfaces'
import React, { useState, useEffect, useRef } from 'react'
import { allProjects } from '@/.contentlayer/generated'
import { compareDesc } from 'date-fns'
import ReactPaginate from 'react-paginate'
import { motion } from 'framer-motion'
import { projectContent } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'
import Item from './Item'


const Project = ({ className, itemsPerPage }: projectProops) => {
    const items = allProjects.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    )

    const [currentItems, setcurrentItems] = useState(null)
    const [pageCount, setpageCount] = useState(0)
    const [itemOffset, setitemOffset] = useState(0)
    const [clickPaginate, setclickPaginate] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setcurrentItems(items.slice(itemOffset, endOffset))
        setpageCount(Math.ceil(items.length / itemsPerPage))

        if (clickPaginate === true) {
            ref.current?.scrollIntoView({ top: -50, behavior: 'smooth' })
            setclickPaginate(false)
        }
    }, [itemOffset, itemsPerPage, clickPaginate, items])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length
        setclickPaginate(true)
        setitemOffset(newOffset)
    }

    if (!items) return null;

    return (
        <section className={`${className}`} ref={ref}>
            <div className='container px-4 mx-auto'>
                <div className='lg:w-10/12 mx-auto flex flex-wrap mb-10'>
                    <Item curItems={currentItems} />
                </div>

                <div className='lg:w-10/12 mx-auto flex flex-wrap'>
                    <ReactPaginate
                        nextLabel="Next"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="Previous"
                        pageClassName='page-item'
                        pageLinkClassName='page-link'
                        previousClassName='page-item'
                        previousLinkClassName='page-link'
                        nextClassName='page-item'
                        nextLinkClassName='page-link'
                        breakLabel="..."
                        breakClassName='page-item'
                        breakLinkClassName='page-link'
                        containerClassName='pagination'
                        activeClassName='active'
                        renderOnZeroPageCount={null} />
                </div>
            </div>
        </section>
    )
}

export default Project