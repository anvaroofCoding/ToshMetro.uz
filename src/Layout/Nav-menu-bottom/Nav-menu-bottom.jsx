'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function NavMenu() {
	const [openIndex, setOpenIndex] = useState(null)

	const handleHover = index => setOpenIndex(index)
	const handleLeave = () => setOpenIndex(null)

	const t = useTranslations()

	const menuItems = [
		{ label: t('home'), submenu: [] },
		{
			label: t('services'),
			submenu: [t('passport'), t('registration'), t('payments')],
		},
		{
			label: t('news'),
			submenu: [t('announcements'), t('press_releases')],
		},
		{
			label: t('documents'),
			submenu: [t('laws'), t('decrees'), t('regulations')],
		},
		{
			label: t('interactive'),
			submenu: [t('apply'), t('complaint')],
		},
		{
			label: t('statistics'),
			submenu: [t('annual_reports'), t('monthly_indicators')],
		},
		{
			label: t('contact'),
			submenu: [t('contact_us'), t('regional_departments')],
		},
		{
			label: t('about_us'),
			submenu: [t('about_org'), t('leadership')],
		},
	]
	return (
		<div className='container py-10'>
			{' '}
			<ul className='flex flex-row font-[600] Dosams items-center justify-between text-xl  text-gray-700 dark:text-gray-200'>
				{menuItems.map((item, index) => (
					<li
						key={index}
						className='relative group'
						onMouseEnter={() => handleHover(index)}
						onMouseLeave={handleLeave}
					>
						<div className='cursor-pointer pb-2'>
							<span className='relative inline-block px-1'>
								{item.label}
								{/* Border animation */}
								<span className='absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-600 dark:bg-blue-400 group-hover:left-0 group-hover:w-1/2 transition-all duration-300 origin-center'></span>
								<span className='absolute bottom-0 right-1/2 w-0 h-[2px] bg-blue-600 dark:bg-blue-400 group-hover:right-0 group-hover:w-1/2 transition-all duration-300 origin-center'></span>
							</span>
						</div>

						{/* Dropdown if any */}
						<AnimatePresence>
							{openIndex === index && item.submenu.length > 0 && (
								<motion.ul
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ duration: 0.2 }}
									className='absolute top-full mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md z-50 min-w-[180px] py-2'
								>
									{item.submenu.map((sub, i) => (
										<li
											key={i}
											className='px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition'
										>
											{sub}
										</li>
									))}
								</motion.ul>
							)}
						</AnimatePresence>
					</li>
				))}
			</ul>
		</div>
	)
}
