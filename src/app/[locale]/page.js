import { AccordionDemo } from '@/Components/Accor/AccordionDemo'
import Animationtext1 from '@/Components/animation/animateText'
import { InfiniteMovingCardsDemo } from '@/Components/animation/InfiniteMovingCardsDemo'
import { AppleCardsCarouselDemo } from '@/Components/Apple/AppleCardsCarouselDemo'
import { StickyScrollRevealDemo } from '@/Components/demo/StickyScrollRevealDemo'
import MetroStatus from '@/Components/MetroStatus/MetroStatus'
import { HeroScrollDemo } from '@/Components/planshet/HeroScrollDemo'
import Input from '@/Components/search/search'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import img from '../../Assets/Metro Img/5-1657126520-jasur2000-post-material.jpeg'

export default function Home() {
	const t = useTranslations()
	return (
		<div className='xl:pt-[20px] pt-[100px]'>
			<div className='container  xl:h-[300px] h-[400px] relative flex justify-between items-center'>
				<div className='bg-blue-600/60 w-full h-full justify-center relative z-10 flex flex-col items-center p-4'>
					<div className='w-full xl:mb-0 mb-10'>
						<h2 className='Dosams text-[36px] font-bold text-start text-white'>
							{t('search')}
						</h2>
					</div>
					<div className='w-full flex flex-col justify-center gap-[40px] items-center'>
						<div className='flex items-center justify-center border'>
							<Input />
						</div>
						<div className=''>
							<MetroStatus />
						</div>
					</div>
				</div>
				<Image src={img} className='w-full h-full object-cover absolute z-0' />
			</div>
			<div>
				<AppleCardsCarouselDemo />
			</div>
			<div className=' py-4'>
				<Animationtext1 />
			</div>
			<div className='container Dosams'>
				<div className='py-10'>
					<h2 className='font-[600] text-[48px] pb-10'>
						Foydali <span className='text-blues'>Havolalar</span>
					</h2>
					<StickyScrollRevealDemo />
				</div>
				<h2 className='font-[600] text-[48px] pb-10'>
					Biz <span className='text-blues'>Haqimizda</span>
				</h2>
				<AccordionDemo />
			</div>
			<div>
				<HeroScrollDemo />
			</div>
			<div>
				<InfiniteMovingCardsDemo />
			</div>
		</div>
	)
}
