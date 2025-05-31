// Navbar.jsx
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
	ChevronDown,
	Facebook,
	Globe,
	Instagram,
	Mail,
	Menu,
	Moon,
	Sun,
	X,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useState } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import logo from '../../Assets/For Logo/MetroLogo.png'

export default function Navbars() {
	const t = useTranslations()
	const [isOpen, setIsOpen] = useState(false)
	const { theme, setTheme } = useTheme()
	const [lang, setLang] = useState('UZ')
	const [openDropdown, setOpenDropdown] = useState(null)

	const toggleMenu = () => setIsOpen(!isOpen)

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
		<header className='fixed top-0 left-0 w-full bg-white dark:bg-grays shadow-md z-50 xl:hidden'>
			<div className='px-4 py-3 flex items-center justify-between'>
				<Image src={logo} alt='logo' height={60} className='h-[80%]' />

				<button onClick={toggleMenu} className='text-black dark:text-white'>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ y: '-100%' }}
						animate={{ y: 0 }}
						exit={{ y: '-100%' }}
						transition={{ duration: 0.3 }}
						className='fixed inset-0 bg-white dark:bg-grays p-6 flex flex-col gap-6 items-center justify-start xl:hidden z-50 overflow-y-auto'
					>
						<div className='w-full flex justify-end'>
							<button
								onClick={() => setIsOpen(false)}
								className='text-black dark:text-white'
							>
								<X size={24} />
							</button>
						</div>

						<div className='w-full text-left mb-4'>
							{menuItems.map((item, idx) => (
								<div key={idx} className='mb-2'>
									<button
										onClick={() =>
											setOpenDropdown(openDropdown === idx ? null : idx)
										}
										className='w-full flex justify-between items-center text-left font-semibold text-lg text-black dark:text-white'
									>
										{item.label}
										{item.submenu.length > 0 && <ChevronDown size={18} />}
									</button>
									{openDropdown === idx && item.submenu.length > 0 && (
										<ul className='ml-4 mt-1 space-y-1'>
											{item.submenu.map((sub, subIdx) => (
												<li
													key={subIdx}
													className='text-sm text-gray-700 dark:text-gray-300'
												>
													{sub}
												</li>
											))}
										</ul>
									)}
								</div>
							))}
						</div>

						<div className='flex gap-4 items-center'>
							<Globe />
							{['UZ', 'EN', 'RU'].map(l => (
								<button
									key={l}
									onClick={() => setLang(l)}
									className={`text-lg ${
										lang === l ? 'font-bold underline' : ''
									}`}
								>
									{l}
								</button>
							))}
						</div>

						<button
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							className='text-2xl mt-4'
						>
							{theme === 'dark' ? <Sun /> : <Moon />}
						</button>

						<div className='flex gap-6 mt-6'>
							<a href='mailto:example@mail.com' className='hover:text-blue-500'>
								<Mail />
							</a>
							<a
								href='https://instagram.com'
								target='_blank'
								className='hover:text-pink-500'
							>
								<Instagram />
							</a>
							<a
								href='https://t.me'
								target='_blank'
								className='hover:text-blue-400'
							>
								<FaTelegramPlane size={20} />
							</a>
							<a
								href='https://facebook.com'
								target='_blank'
								className='hover:text-blue-700'
							>
								<Facebook />
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	)
}
