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
			<AccordionItem value='item-1'>
				<AccordionTrigger className='text-[28px] cursor-pointer'>
					Qanday To'nalandi
				</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-4 text-balance'>
					<p>
						Our flagship product combines cutting-edge technology with sleek
						design. Built with premium materials, it offers unparalleled
						performance and reliability.
					</p>
					<p>
						Key features include advanced processing capabilities, and an
						intuitive user interface designed for both beginners and experts.
					</p>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-2'>
				<AccordionTrigger className='text-[28px] cursor-pointer'>
					Metro Xaritasi
				</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-4 text-balance'>
					<Image src={log} alt='Metro Xaritasi' />
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-3'>
				<AccordionTrigger className='text-[28px] cursor-pointer'>
					Unitilgan Buyumlar
				</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-4 text-balance'>
					<p>
						We stand behind our products with a comprehensive 30-day return
						policy. If you&apos;re not completely satisfied, simply return the
						item in its original condition.
					</p>
					<p>
						Our hassle-free return process includes free return shipping and
						full refunds processed within 48 hours of receiving the returned
						item.
					</p>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-4'>
				<AccordionTrigger className='text-[28px] cursor-pointer'>
					MetroPoliten Tarixi
				</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-4 text-balance'>
					<p>
						We stand behind our products with a comprehensive 30-day return
						policy. If you&apos;re not completely satisfied, simply return the
						item in its original condition.
					</p>
					<p>
						Our hassle-free return process includes free return shipping and
						full refunds processed within 48 hours of receiving the returned
						item.
					</p>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-5'>
				<AccordionTrigger className='text-[28px] cursor-pointer'>
					Qoidalar
				</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-4 text-balance'>
					<p>
						We stand behind our products with a comprehensive 30-day return
						policy. If you&apos;re not completely satisfied, simply return the
						item in its original condition.
					</p>
					<p>
						Our hassle-free return process includes free return shipping and
						full refunds processed within 48 hours of receiving the returned
						item.
					</p>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-6'>
				<AccordionTrigger className='text-[28px] cursor-pointer'>
					Rivojlanish va Rejalar
				</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-4 text-balance'>
					<p>
						We stand behind our products with a comprehensive 30-day return
						policy. If you&apos;re not completely satisfied, simply return the
						item in its original condition.
					</p>
					<p>
						Our hassle-free return process includes free return shipping and
						full refunds processed within 48 hours of receiving the returned
						item.
					</p>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
