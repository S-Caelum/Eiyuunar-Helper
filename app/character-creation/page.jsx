'use client'

import {useState, useEffect} from 'react'
import StatBlock from '../(components)/(characters)/statBlock'
import Image from 'next/image'
import W from '../../public/arknights-w-arknights.gif'
import Aethelian from '../../public/Aethelian_coin.svg'
import Dwarven from '../../public/Dwarven_coin.svg'

export default function CharacterCreation() {
	/* Чё там надо
		Владения
		Скорость
		Валютта
		Здоровье		
	*/
	const [str, setStr] = useState({
		a: 0,
		b: 0,
		result: 0,
		hp: 0,
	})
	const [agi, setAgi] = useState({
		a: 0,
		b: 0,
		result: 0,
		hp: 0,
	})
	const [int, setInt] = useState({
		a: 0,
		b: 0,
		result: 0,
	})
	const [hp, setHp] = useState({
		baseHp: 2800,
		maxHp: 2800,
	})
	useEffect(() => {
		setHp({
			maxHp: 2800 + agi.hp + str.hp,
		})
	}, [agi.hp, str.hp])
	return (
		<main className='z-20 flex flex-col items-center text-white h-screen'>
			<div className='flex flex-col w-11/12 bg-neutral-800/60 mt-24 md:mt-10 lg:mb-10 rounded-xl h-full'>
				<div className='ring-1 flex flex-col lg:flex-row w-full xl:h-24 p-2'>
					{/* Портрет, имя, фамилия */}
					<div className='ring-1 flex flex-row w-full xl:w-3/12 h-[80px]'>
						<div className='h-[80px] w-[80px] bg-white rounded-lg'></div>
						<div className='grid grid-rows-2 items-center'>
							<input
								className='h-1/3 bg-transparent text-sm border-b-[1px] border-white/50 focus:outline-none focus:placeholder:[color:transparent]'
								placeholder='Титул персонажа'
							/>
							<input
								className='h-1/2 bg-transparent border-b-[1px] border-white/50 focus:outline-none focus:placeholder:[color:transparent]'
								placeholder='Имя персонажа'
							/>
						</div>
					</div>
					{/* ХП */}
					<div className='ring-1 flex flex-col w-full items-center justify-center p-2 xl:w-3/12 h-[80px]'>
						<div className='w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700'>
							<div className={`bg-red-600 h-4 rounded-full w-[${hp.percentage}%]`}></div>
						</div>
						<div className='w-full flex justify-between  h-2.5'>
							<p>{hp.maxHp}</p>
							<p>/</p>
							<p>{hp.maxHp}</p>
						</div>
					</div>
					{/* Владения */}
					<div className='ring-1 flex flex-row w-full xl:w-3/12 h-[80px]'></div>
					{/* Валюта */}
					<div className='ring-1 flex flex-row w-full xl:w-3/12 h-[80px]'>
						{/* Итэлианская */}
						<div className='flex flex-col gap-1 w-1/3 justify-center items-center'>
						</div>
						<div className='flex flex-col gap-1 w-1/3 justify-center items-center'>
						</div>
					</div>
				</div>
				<div className='ring-1 flex flex-col md:flex-row md:flex-wrap w-full h-[81%] p-2'>
					<div className='flex flex-col ring-1 md:w-6/12 xl:w-3/12 h-full'>
						<StatBlock name={'Сила'} a={'Телосложение'} b={'Выносливость'} stat={str} setStat={setStr} />
						<StatBlock name={'Ловкость'} a={'Скорость'} b={'Реакция'} stat={agi} setStat={setAgi} />
						<StatBlock name={'Интеллект'} a={'Академика'} b={'Мудрость'} stat={int} setStat={setInt} />
					</div>
					<div className='ring-1 md:w-6/12 xl:w-3/12 h-full'></div>
					<div className='ring-1 md:w-full xl:w-6/12 h-full'>
						ИДИТЕ НАХУЙ
						<Image src={W} width={256} height={256} alt='w' />
					</div>
				</div>
				<div className='ring-1 w-full hidden lg:flex flex-row-reverse pl-8 pr-8 justify-between h-[9%]'>
					<button> Сохранить </button>
					<button> Очистить </button>
				</div>
			</div>
		</main>
	)
}
