'use client'
import React from 'react'
import Items from './Nav'
import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Menu = ({Items}) => {
	const [isOpen, setIsOpen] = useState(false)
	const visibilityState = isOpen ? ['visible', 'scroll'] : ['hidden', 'hidden']
	const toggle = () => {
		setIsOpen((state) => !state)
		document.body.style.overflow = visibilityState[1]
	}
	return (
		<div className='md:hidden w-12 h-12 visible text-white'>
			<button className='w-12 h-12 ring-1 ring-white rounded-lg' onClick={toggle}></button>
			<div className={`absolute z-30 pt-8 top-[64px] left-0 w-screen flex flex-col ${visibilityState[0]}`}>
				{Items.map(({title, link, image}, id) => {
					return (
						<div className='animate-menu-in w-full h-24 flex flex-col items-center justify-center ' key={id} onClick={toggle}>
							<Link className='w-3/4 h-full grid text-md items-center grid-cols-2' href={`${link}`}>
								<Image priority className='w-8 h-8 ml-8' src={image} alt={`${title}`}/>
                                <p className=' justify-self-end pr-8'>{title}</p>
							</Link>
							<hr className='w-3/4 border-gray-400' />
						</div>
					)
				})}
			</div>
			{isOpen && (
				<div
					className={`animate-drop-menu bg-black/80 backdrop-blur-md fixed top-[66px] right-0 left-0 z-20`}
					onClick={toggle}></div>
			)}
		</div>
	)
}

export default Menu
