import React, { useEffect } from 'react'

const StatBlock = ({name, a, b, stat, setStat}) => {
	let multiplier = 0
	let _multiplier = 0

	const banned = ["Академика", "Мудрость"]
	const reduced = ["Скорость", "Реакция", "Выносливость"]

	if (banned.includes(a))
		multiplier = 0
	else if (reduced.includes(a))
		multiplier = 100
	else
		multiplier = 300

	if (banned.includes(b))
		_multiplier = 0
	else if (reduced.includes(b)) 
		_multiplier = 100
	else
		_multiplier = 300

	return (
		<div className='w-full h-1/4'>
			<p className='p-1  h-1/4 md:text-lg'>{name}</p>
			<div className='flex ring-1 md:ring-2 ring-white rounded-md h-3/4'>
				<div className='flex flex-col items-center justify-center gap-6 ring-1 rounded-l-md ring-white w-3/6 h-full'>
					<p className='text-[1vw]'>{a}</p>
					<p className='text-[1vw]'>{b}</p>
				</div>
				<div className='flex flex-col ring-1 ring-white items-center justify-center gap-6 w-1/6 h-full'>
					<input
						type='tel'
						placeholder='4'
						maxLength={2}
						className='text-center focus:outline-none focus:placeholder:[color:transparent] text-xl bg-transparent w-3/6'
						onChange={(e) => {
							setStat({
								...stat,
								a: Number(e.target.value),
								result: Number(e.target.value) + stat.b,
								hp: Number(e.target.value)*multiplier + stat.b*_multiplier
							});
						}}
					/>
					<input
						type='tel'
						placeholder='4'
						maxLength={2}
						className='text-center focus:outline-none focus:placeholder:[color:transparent] text-xl bg-transparent w-3/6'
						onChange={(e) => {
							setStat({
								...stat,
								b: Number(e.target.value),
								result: Number(e.target.value) + stat.a,
								hp: Number(e.target.value)*_multiplier + stat.a*multiplier
							})
						}}
					/>
				</div>
				<div className='flex flex-col ring-1 items-center justify-center w-2/6 rounded-r-md ring-white h-full'>
					<p className='text-3xl pr-[2px]'>{stat.result}</p>
				</div>
			</div>
		</div>
	)
}

export default StatBlock
