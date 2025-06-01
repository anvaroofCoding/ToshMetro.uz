'use client'

import { Card, Carousel } from '@/components/ui/apple-cards-carousel'
import { useTranslations } from 'next-intl'

export function AppleCardsCarouselDemo() {
	const t = useTranslations()

	const data = [
		{
			category: t('transport'),
			title: t('metro'),
			src: 'https://www.gazeta.uz/media/img/2021/09/YNHUpw16310194436993_l.jpg',
			content: <DummyContent />,
		},
		{
			category: t('excavators'),
			title: t('metro_excavators'),
			src: 'https://www.gazeta.uz/media/img/2023/04/eTeCS116824281886238_l.jpg',
			content: <DummyContent />,
		},
		{
			category: t('corruption'),
			title: t('corruption_fight'),
			src: 'https://tashmetro.uz/wp-content/uploads/2025/02/photo_2025-02-18_15-49-13.jpg',
			content: <DummyContent />,
		},

		{
			category: t('product'),
			title: t('iphone_maps'),
			src: 'https://tashmetro.uz/wp-content/uploads/2025/01/1.jpg',
			content: <DummyContent />,
		},
		{
			category: t('ios'),
			title: t('ios_photography'),
			src: 'https://www.gazeta.uz/media/img/2020/09/otorr415994858203547_l.jpg',
			content: <DummyContent />,
		},
		{
			category: t('hiring'),
			title: t('staff_hiring'),
			src: 'https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/e0f4aa07256f7cc564058a46e751d6f9.jpg',
			content: <DummyContent />,
		},
	]
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} />
	))

	return (
		<div className='w-full h-full py-20'>
			<h2 className='container pl-0 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 Dosams'>
				{t('latestNews')}
			</h2>
			<Carousel items={cards} />
		</div>
	)
}

const DummyContent = () => {
	return (
		<>
			{[...new Array(3).fill(1)].map((_, index) => {
				return (
					<div
						key={'dummy-content' + index}
						className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'
					>
						<p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
							<span className='font-bold text-neutral-700 dark:text-neutral-200'>
								The first rule of Apple club is that you boast about Apple club.
							</span>{' '}
							Keep a journal, quickly jot down a grocery list, and take amazing
							class notes. Want to convert those notes to text? No problem.
							Langotiya jeetu ka mara hua yaar is ready to capture every
							thought.
						</p>
						<img
							src='https://assets.aceternity.com/macbook.png'
							alt='Macbook mockup from Aceternity UI'
							height='500'
							width='500'
							className='md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain'
						/>
					</div>
				)
			})}
		</>
	)
}
