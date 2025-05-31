'use client'

import { ThemeProvider } from 'next-themes'
import NavMenu from '../Nav-menu-bottom/Nav-menu-bottom'
import NavTopBox from '../Nav-top-box/nav-top-box'
import Navbar from '../Navbar-menu/Navbar'
import Navbars from '../nav-mobile/nav-mobile'

const Layout = ({ children }) => {
	return (
		<div>
			<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
				<div className='xl:block hidden'>
					<NavTopBox />
					<Navbar />
					<NavMenu />
				</div>
				<div className='xl:hidden block'>
					<Navbars />
				</div>
				{children}
			</ThemeProvider>
		</div>
	)
}

export default Layout
