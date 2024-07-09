'use client'
import {signIn, signOut, useSession} from 'next-auth/react'
import React, {useState} from 'react'
import Image from 'next/image'
import signinIcon from '../../public/SignInIco.svg'
import signoutIcon from '../../public/SingOutIco.svg'
import {useRouter} from 'next/navigation'
import Link from 'next/link'

const NavUserCard = () => {
	const router = useRouter()
	const {data: session} = useSession()
	if (session) {
		const {user} = session

		return (
			<div className='md:w-9/12 md:h-[15%] h-12 w-[20%] flex md:flex-col items-center justify-around ring-1 ring-white/15 bg-gradient-to-bl from-neutral-950 to-neutral-900 rounded-lg'>
				<button className='hidden sm:flex' onClick={() => signOut()}>
					<Image className='w-[36px] h-[36px] md:w-12 md:h-12' src={signoutIcon} alt='Выйти' />
				</button>
				{user?.image && (
					<Link className='relative w-[42px] h-[42px] md:w-12 md:h-12' href={`http://localhost:3000/profile/${user.name}`}>
                        <Image
							src={user.image}
                            draggable={false}
							className='relative rounded-lg ring-1 ring-white/10'
							alt='аватар'
                            fill
						/>
					</Link>
				)}
			</div>
		)
	} else {
		return (
			<div className='md:w-9/12 md:h-[15%] h-12 w-[20%] flex lg:flex-col items-center justify-center ring-0 ring-transparent bg-transparent rounded-lg'>
				<button
					className='relative w-[42px] h-[42px] md:w-12 md:h-12 flex align-middle'
					onClick={() => signIn('discord', {redirect: false})}>
					<Image className='relative w-[42px] h-[42px] md:w-12 md:h-12' src={signinIcon} alt='Войти' />
				</button>
			</div>
		)
	}
}

export default NavUserCard