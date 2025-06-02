'use client'

import Image from 'next/image'
import log from '../../Assets/Metro Img/metro.jpg'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../ui/accordion'

export function AccordionDemo() {
	return (
		<Accordion
			type='single'
			collapsible
			className='w-full'
			defaultValue='item-1'
		>
			{[
				{
					value: 'item-1',
					title: "Qanday To'nalandi",
					content: (
						<>
							<p>
								Our flagship product combines cutting-edge technology with sleek
								design. Built with premium materials, it offers unparalleled
								performance and reliability.
							</p>
							<p>
								Key features include advanced processing capabilities, and an
								intuitive user interface designed for both beginners and
								experts.
							</p>
						</>
					),
				},
				{
					value: 'item-2',
					title: 'Metro Xaritasi',
					content: (
						<Image
							src={log}
							alt='Metro Xaritasi'
							className='rounded-lg w-full h-auto'
						/>
					),
				},
				{
					value: 'item-3',
					title: 'Unitilgan Buyumlar',
					content: (
						<>
							<p>
								We stand behind our products with a comprehensive 30-day return
								policy. If you're not completely satisfied, simply return the
								item in its original condition.
							</p>
							<p>
								Our hassle-free return process includes free return shipping and
								full refunds processed within 48 hours of receiving the returned
								item.
							</p>
						</>
					),
				},
				{
					value: 'item-4',
					title: 'MetroPoliten Tarixi',
					content: (
						<>
							<p>
								The history of MetroPoliten is deeply rooted in the evolution of
								urban transportation and modernization of the city.
							</p>
							<p>
								It reflects the technological advancements and the spirit of the
								people.
							</p>
						</>
					),
				},
				{
					value: 'item-5',
					title: 'Qoidalar',
					content: (
						<>
							<p>
								Please adhere to all posted regulations and respect other
								passengers.
							</p>
							<p>
								For everyone's safety and comfort, follow the staff’s
								instructions.
							</p>
						</>
					),
				},
				{
					value: 'item-6',
					title: 'Rivojlanish va Rejalar',
					content: (
						<>
							<p>
								Future development includes expanding new lines, improving
								ticketing systems, and ensuring energy efficiency.
							</p>
							<p>
								The vision aims to make Metro more accessible and
								environmentally friendly.
							</p>
						</>
					),
				},
			].map(({ value, title, content }) => (
				<AccordionItem value={value} key={value}>
					<AccordionTrigger className='text-[28px] cursor-pointer relative group pb-2  hover:no-underline focus:no-underline'>
						{title}
						<span className='absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:left-0 group-hover:w-full'></span>
					</AccordionTrigger>
					<AccordionContent className='flex flex-col gap-4 text-balance transition-all duration-500'>
						{content}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
