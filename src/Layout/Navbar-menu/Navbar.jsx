import LanguageSwitcher from '@/Languages/LanguageSwitcher'
import DarkModeToggle from '@/mod/Dark-Mode'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import log from '../../Assets/For Logo/MetroLogo.png'

const Navbar = () => {
	const t = useTranslations()
	return (
		<div className='border-b border-black/20 dark:border-white/20'>
			<div className='container  h-[100px] flex justify-between items-center Dosams'>
				<div className='flex justify-center items-center gap-[20px]'>
					<Link href={'/'}>
						<Image src={log} alt='Metro Logo' height={70} />
					</Link>
					<h2 className='text-[20px] text-black font-bold w-[450px] dark:text-white'>
						{t('companyName')}
					</h2>
				</div>
				<div className='flex gap-[20px]'>
					<DarkModeToggle />
					<LanguageSwitcher />
				</div>
			</div>
		</div>
	)
}

export default Navbar
