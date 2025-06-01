'use client'
import { StickyScroll } from '../ui/sticky-scroll-reveal'

const content = [
	{
		title: 'Shavkat Mirziyoyev - Ozbekiston Respublikasi Prezidenti',
		description:
			'Shavkat Mirziyoyev Oʻzbekiston Respublikasi Prezidenti – Prezidentning rasmiy sayti. Ozbekiston Prezidenti Shavkat Mirziyoyev haqida malumot',
		content: (
			<div className='flex h-full w-full items-center justify-center text-white'>
				<img
					src='https://yuz.uz/file/news/0e3e95b03ebfa03a30f4682cf8cb3656.jpg'
					width={300}
					height={300}
					className='h-full w-full object-cover'
					alt='linear board demo'
				/>
			</div>
		),
	},
	{
		title: 'Ўзбекистон Республикаси Ҳукумат портали',
		description: 'Ўзбекистон Республикаси Ҳукумати портали ягона платформаси',
		content: (
			<div className='flex h-full w-full items-center justify-center text-white'>
				<img
					src='https://shirinuz.uz/wp-content/uploads/2021/09/gov-uz.png'
					width={300}
					height={300}
					className='h-full w-full object-cover'
					alt='linear board demo'
				/>
			</div>
		),
	},
	{
		title: 'Олий Мажлис Конунчилик палатаси',
		description: 'ЎЗБЕКИСТОН РЕСПУБЛИКАСИ ОЛИЙ МАЖЛИСИ ҚОНУНЧИЛИК ПАЛАТАСИ',
		content: (
			<div className='flex h-full w-full items-center justify-center text-white'>
				<img
					src='https://parliament.gov.uz/media/live_stream/111_wTanIt0.jpg'
					width={300}
					height={300}
					className='h-full w-full object-cover'
					alt='linear board demo'
				/>
			</div>
		),
	},
	{
		title: 'Oʻzbekiston Respublikasi Transport vazirligi',
		description: 'Oʻzbekiston Respublikasi Transport vazirligi',
		content: (
			<div className='flex h-full w-full items-center justify-center text-white'>
				<img
					src='https://cdn4.cdn-telegram.org/file/ppX-vKPZn3y10O83u3-GKqFeUlsatjI7IQKtx5YfW21xwbYYY6tFgbb0OouyhxJbAoe6L7reoaSEce5feQOCtAyVEmIQFW2D02QauDf7kM237Acxcma3B8lncvEL3eazwVO9SNDs9pBwH2gxlNeMerWSwu1eyU0kjYHI_NXJIYa8bwDcKYXWHKYI9lgWOwUJzXKYvEd_eQqZI5bzTHUEEqeJcOciEYZmsIiiDQan5VjbgvENrw6pwdLlnjInyd8eAdkg5zNWY7SHEkhl9-_TIBMX5pukqdDqbJjRmVgbqZtK6bjK-XGkdqGe2XmVIEUgUp6RTM-AjEYVnf2DbGNReQ.jpg'
					width={300}
					height={300}
					className='h-full w-full object-cover'
					alt='linear board demo'
				/>
			</div>
		),
	},
	{
		title: 'Real time changes',
		description:
			'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
		content: (
			<div className='flex h-full w-full items-center justify-center text-white'>
				<img
					src='https://t3.ftcdn.net/jpg/04/35/92/40/360_F_435924070_A2n5ZyQUF7nCRsYZj6SX1SAYOn5sggFh.jpg'
					width={300}
					height={300}
					className='h-full w-full object-cover'
					alt='linear board demo'
				/>
			</div>
		),
	},
	{
		title: 'Real time changes',
		description:
			'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
		content: (
			<div className='flex h-full w-full items-center justify-center text-white'>
				<img
					src='https://t3.ftcdn.net/jpg/04/35/92/40/360_F_435924070_A2n5ZyQUF7nCRsYZj6SX1SAYOn5sggFh.jpg'
					width={300}
					height={300}
					className='h-full w-full object-cover'
					alt='linear board demo'
				/>
			</div>
		),
	},
	{
		title: 'Real time changes',
		description:
			'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
		content: (
			<div className='flex h-full w-full items-center justify-center text-white'>
				<img
					src='https://t3.ftcdn.net/jpg/04/35/92/40/360_F_435924070_A2n5ZyQUF7nCRsYZj6SX1SAYOn5sggFh.jpg'
					width={300}
					height={300}
					className='h-full w-full object-cover'
					alt='linear board demo'
				/>
			</div>
		),
	},
	{
		title: 'Real time changes',
		description:
			'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
		content: (
			<div className='flex h-full w-full items-center justify-center text-white'>
				<img
					src='https://t3.ftcdn.net/jpg/04/35/92/40/360_F_435924070_A2n5ZyQUF7nCRsYZj6SX1SAYOn5sggFh.jpg'
					width={300}
					height={300}
					className='h-full w-full object-cover'
					alt='linear board demo'
				/>
			</div>
		),
	},
	{
		title: 'Real time changes',
		description:
			'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
		content: (
			<div className='flex h-full w-full items-center justify-center text-white'>
				<img
					src='https://t3.ftcdn.net/jpg/04/35/92/40/360_F_435924070_A2n5ZyQUF7nCRsYZj6SX1SAYOn5sggFh.jpg'
					width={300}
					height={300}
					className='h-full w-full object-cover'
					alt='linear board demo'
				/>
			</div>
		),
	},
]
export function StickyScrollRevealDemo() {
	return (
		<div className='w-full py-4'>
			<StickyScroll content={content} />
		</div>
	)
}
