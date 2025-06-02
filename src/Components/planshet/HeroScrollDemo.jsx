'use client'
import { ContainerScroll } from '../ui/container-scroll-animation'

export function HeroScrollDemo() {
	return (
		<div className='flex flex-col overflow-hidden'>
			<ContainerScroll
				titleComponent={
					<>
						<h1 className='text-4xl font-semibold text-black dark:text-white'>
							Metromizning go'zalligi <br />
							<span className='text-4xl md:text-[6rem] font-bold mt-1 leading-none'>
								Tez va xavfsiz
							</span>
						</h1>
					</>
				}
			>
				<img
					src={`https://sprav.uz//storage/publications/July2024/-%D0%BD%D0%B0%D0%B4%D0%B7%D0%B5%D0%BC%D0%BD%D0%BE%D0%B5.jpg`}
					alt='hero'
					height={720}
					width={1400}
					className='mx-auto rounded-2xl object-cover h-full object-left-top'
					draggable={false}
				/>
			</ContainerScroll>
		</div>
	)
}
