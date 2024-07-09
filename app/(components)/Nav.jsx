import React from 'react'
import Link from 'next/link'
import Logo from '../../public/Eiyuunar_full.svg'
import Image from 'next/image'
import NavUserCard from './NavUserCard'
import World from '../../public/World.svg'
import NPCs from '../../public/Characters.svg'
import System from '../../public/System.svg'
import Spells from '../../public/Spells.svg'
import Bestiary from '../../public/Bestiary.svg'
import Menu from './menu'

export const Items = [
	{
		title: 'Мир',
		link: '#',
		image: World,
	},
	{
		title: 'Система',
		link: '/system',
		image: System,
	},
	{
		title: 'НПС',
		link: '#',
		image: NPCs,
	},
	{
		title: 'Заклинания',
		link: '/spells',
		image: Spells,
	},
	{
		title: 'Бестиарий',
		link: '/bestiary',
		image: Bestiary,
	},
]

const Nav = () => {
	return (
		<nav className='flex flex-row md:flex-col align-middle justify-around items-center top-0 md:top-auto md:bottom-auto md:left-0 w-full md:w-[72px] h-16 md:h-screen pl-3 pr-3 md:p-0  md:fixed ring-white/30 ring-1 fixed bg-black'>
			<Link className='md:h-fit md:w-fit w-[20%] flex flex-col items-center justify-start' href='../'>
				<Image draggable={false} className='w-14 h-14 md:w-14 md:h-14' src={Logo} alt='logo' />
			</Link>
			<div className='hidden md:visible md:flex md:w-9/12 md:h-[40%] md:flex-col md:justify-around md:items-center ring-1 ring-white/15 bg-gradient-to-br from-neutral-950 to-neutral-900 rounded-md'>
				{Items.map(({title, link, image}, id) => {
					return (
						<Link key={id}  href={link}>
							<Image draggable={false} src={image} className='w-[30px] h-[30px] md:w-[36px] md:h-[36px]' alt={title} />
						</Link>
					)
				})}
			</div>
			<Menu Items={Items} />

			<NavUserCard />
		</nav>
	)
}
export default Nav
