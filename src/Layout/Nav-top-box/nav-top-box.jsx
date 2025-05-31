import { Facebook, Headset, Instagram, Mail, Send } from 'lucide-react'
import Link from 'next/link'

const NavTopBox = () => {
	return (
		<div className='bg-blues lg:block hidden'>
			<div className='container h-[30px] lg:flex hidden justify-between items-center Dosams text-[16px]'>
				<div className='flex gap-2 items-center text-white'>
					<Headset />
					<Link href={'tel:+998712416514'}>+99871 241-65-14</Link>
				</div>
				<h2 className='text-white text-[18px] font-bold'>
					"TOSHKENT METROPOLITENI" DUK
				</h2>
				<div className='text-white flex justify-center items-center gap-[10px] '>
					<div className='w-[25px] h-[25px] flex justify-center items-center rounded-[50%] '>
						<Link href={'telegram'}>
							<Send className='text-[10px]' />
						</Link>
					</div>
					<div className='w-[25px] h-[25px] flex justify-center items-center rounded-[50%] '>
						<Link href={'instagram'}>
							<Instagram className='text-[10px]' />
						</Link>
					</div>
					<div className='w-[25px] h-[25px] flex justify-center items-center rounded-[50%] '>
						<Link href={'telegram'}>
							<Facebook className='text-[10px]' />
						</Link>
					</div>
					<div className='w-[25px] h-[25px] flex justify-center items-center rounded-[50%] '>
						<Link href={'telegram'}>
							<Mail className='text-[10px]' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavTopBox
