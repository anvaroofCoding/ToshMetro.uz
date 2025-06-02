import SplashScreen from '@/code/splashCreen'
import Layout from '@/Layout/Layout/Layout'
import { NextIntlClientProvider } from 'next-intl'
import './globals.css'

export const metadata = {
	title: '"TOSHKENT METROPOLITENI" DUK',
	description: '"TOSHKENT METROPOLITENI" DUK',
	icons: {
		icon: '/MetroLogo.png', // public papkasida joylashgan logo fayli
		// Agar turli o'lchamdagi logolar bo'lsa:
		// icon: [
		//   { url: '/MetroLogo.png' },
		//   { url: '/MetroLogo-16x16.png', sizes: '16x16', type: 'image/png' },
		//   { url: '/MetroLogo-32x32.png', sizes: '32x32', type: 'image/png' },
		// ],
	},
}

export default async function RootLayout({ children, params }) {
	const { locale } = await params
	console.log(locale)
	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={` antialiased dark:bg-grays bg-white`}>
				<NextIntlClientProvider>
					<Layout>
						<SplashScreen>{children}</SplashScreen>
					</Layout>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
