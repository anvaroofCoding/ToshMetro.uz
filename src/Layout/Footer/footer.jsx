'use client'

import Image from 'next/image'
import log from '../../Assets/For Logo/MetroLogo.png'

const Footer = () => {
	return (
		<footer className='w-full text-gray-700 border-t bg-white dark:bg-gray-900 dark:text-gray-300 body-font'>
			<div className='container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row'>
				<div className='flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left'>
					<a className='flex items-center justify-center font-medium text-gray-900 dark:text-white title-font md:justify-start'>
						<Image src={log} height={80} alt='metro logo' />
					</a>
					<p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
						Design, Code and Ship!
					</p>
					<div className='mt-4'>
						<span className='inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start'>
							{['facebook', 'twitter', 'instagram', 'linkedin'].map(
								(platform, i) => (
									<a
										key={i}
										className='text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white cursor-pointer mx-1'
									>
										<svg
											fill='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='w-5 h-5'
											viewBox='0 0 24 24'
										>
											<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' />
										</svg>
									</a>
								)
							)}
						</span>
					</div>
				</div>
				<div className='flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left'>
					{[
						{ title: 'About', items: ['Company', 'Careers', 'Blog'] },
						{
							title: 'Support',
							items: ['Contact Support', 'Help Resources', 'Release Updates'],
						},
						{ title: 'Platform', items: ['Terms & Privacy', 'Pricing', 'FAQ'] },
						{
							title: 'Contact',
							items: ['Send a Message', 'Request a Quote', '+123-456-7890'],
						},
					].map((section, i) => (
						<div key={i} className='w-full px-4 lg:w-1/4 md:w-1/2'>
							<h2 className='mb-3 text-sm font-medium tracking-widest text-gray-900 dark:text-white uppercase title-font'>
								{section.title}
							</h2>
							<nav className='mb-10 list-none'>
								{section.items.map((item, j) => (
									<li key={j} className='mt-3'>
										<a className='text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer'>
											{item}
										</a>
									</li>
								))}
							</nav>
						</div>
					))}
				</div>
			</div>
			<div className='bg-gray-300 dark:bg-gray-700'>
				<div className='container px-5 py-4 mx-auto'>
					<p className='text-sm text-gray-700 dark:text-gray-300 capitalize xl:text-center'>
						© 2025 All rights reserved
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
