import Layout from '@/Layout/Layout/Layout'
import { NextIntlClientProvider } from 'next-intl'
import './globals.css'

export const metadata = {
	title: '"TOSHKENT METROPOLITENI" DUK',
	description: '"TOSHKENT METROPOLITENI" DUK',
}

export default async function RootLayout({ children, params }) {
	const { locale } = await params
	console.log(locale)
	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={` antialiased dark:bg-grays bg-white`}>
				<NextIntlClientProvider>
					<Layout>{children}</Layout>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
