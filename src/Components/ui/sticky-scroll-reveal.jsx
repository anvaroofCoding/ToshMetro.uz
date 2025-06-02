'use client'

import { cn } from '@/lib/utils'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export const StickyScroll = ({ content, contentClassName }) => {
	const [activeCard, setActiveCard] = useState(0)
	const ref = useRef(null)

	const { scrollYProgress } = useScroll({
		container: ref,
		offset: ['start start', 'end start'],
	})

	const cardLength = content.length

	useMotionValueEvent(scrollYProgress, 'change', latest => {
		const cardsBreakpoints = content.map((_, index) => index / cardLength)
		const closest = cardsBreakpoints.reduce((acc, point, index) => {
			const distance = Math.abs(latest - point)
			return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc
		}, 0)
		setActiveCard(closest)
	})

	const [background, setBackground] = useState('#ffffff') // Light mode default

	useEffect(() => {
		setBackground('#ffffff') // Always white in light
	}, [])

	return (
		<motion.div
			animate={
				{
					// backgroundColor: background,
				}
			}
			className='relative flex h-[50rem] justify-center space-x-10 overflow-y-auto rounded-[80px] p-10 dark:bg-transparent dark:backdrop-blur-md'
			ref={ref}
		>
			<div className='relative flex items-start px-4'>
				<div className='max-w-2xl'>
					{content.map((item, index) => (
						<div key={item.title + index} className='my-20'>
							<motion.h2
								initial={{ opacity: 0 }}
								animate={{ opacity: activeCard === index ? 1 : 0.3 }}
								className='text-2xl font-bold text-slate-900 dark:text-white'
							>
								{item.title}
							</motion.h2>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: activeCard === index ? 1 : 0.3 }}
								className='mt-4 text-slate-700 dark:text-slate-300 max-w-sm'
							>
								{item.description}
							</motion.p>
						</div>
					))}
					<div className='h-40' />
				</div>
			</div>

			<div
				className={cn(
					'sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white dark:bg-black/60 lg:block',
					contentClassName
				)}
			>
				{content[activeCard].content ?? null}
			</div>
		</motion.div>
	)
}
