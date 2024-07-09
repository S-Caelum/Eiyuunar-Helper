import Link from 'next/link'
import ToolsSections from './(components)/ToolsSections'
import Logo from '../public/Eiyuunar_broken.svg'
import LogoGlow from '../public/broken_glow.svg'
import Image from 'next/image'

const NavigationSections = [
	{
		name: 'Персонажи',
		link: 'world/NPC',
	},
	{
		name: 'Система',
		link: '/system',
	},
	{
		name: 'Характеристики',
		link: '/world/regions',
	},
	{
		name: 'Регионы',
		link: '/world/bestiary',
	},
	{
		name: 'Мир',
		link: 'world/NPC',
	},
	{
		name: 'Система',
		link: '/system',
	},
	{
		name: 'Регионы',
		link: '/world/regions',
	},
	{
		name: 'Бестиарий',
		link: '/world/bestiary',
	},
	{
		name: 'Персонажи',
		link: 'world/NPC',
	},
	{
		name: 'Система',
		link: '/system',
	},
	{
		name: 'Регионы',
		link: '/world/regions',
	},
	{
		name: 'Бестиарий',
		link: '/world/bestiary',
	},
]
const ExampleToolSection = [
	{
		name: 'Бип',
		link: 'буп',
	},
	{
		name: 'Бип',
		link: 'буп',
	},
	{
		name: 'Бип',
		link: 'буп',
	},
	{
		name: 'Бип',
		link: 'буп',
	},
]

export default function Home() {
	return (
		<main className='z-20 pb-16 flex flex-col items-center justify-between text-white'>
			<section className='flex flex-col items-center justify-center h-screen'>
				<Image
					draggable={false}
					id='gl'
					className='mt-2 w-[65vw] h-[65vw] md:w-[65vw] md:h-[65vh]'
					src={Logo}
					alt='logo'
				/>
				<h1 className='text-xl sm:text-2xl lg:text-3xl 2xl:text-[2vw] font-bold'>PROJECT: Eiyuunar</h1>
			</section>

			<section className='w-full h-screen p-3 md:p-0 mt-16 flex flex-col items-center md:flex-col justify-around gap-4'>
				<div className='lg:w-3/6 mt-8 md:h-1/4 flex flex-row justify-evenly flex-wrap'>
					{NavigationSections.map(({name, link}, id) => {
						return (
							<Link
								key={id}
								href={link}
								className='flex justify-center w-4/12 lg:w-2/12 items-center p-4 m-2 text-xs sm:text-md bg-gradient-to-r ring-1 ring-neutral-700/70 from-neutral-900/60 to-neutral-700/40 transition hover:ease-in hover:duration-300 hover:ring-2 hover:ring-purple-700/70 rounded-full'
								>
								<p className='lg:text-[0.8vw]'>{name}</p>
							</Link>
						)
					})}
				</div>
				<div className='flex flex-row w-full justify-around'>
					<ToolsSections header='Инструменты' content={ExampleToolSection} />
					<ToolsSections header='Приколы' content={ExampleToolSection} />
				</div>
			</section>
		</main>
	)
}
