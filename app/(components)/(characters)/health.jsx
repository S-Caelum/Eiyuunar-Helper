'use client'

import React from 'react'
import { useState } from 'react'

const SmallCard = ({info, col}) => {
	return (
		<div className={`flex flex-col col-start-${col} justify-center items-center gap-1 h-full ring-2 ring-white rounded-md`}>
			<p className='text-center'>{info.name}</p>
			<p className='text-center'>200 / 200</p>
		</div>
	)
}

export default SmallCard
