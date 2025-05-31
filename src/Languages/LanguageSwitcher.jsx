'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useTransition } from 'react'

const locales = [
	{ code: 'uz', label: 'uz', flag: '🇺🇿' },
	{ code: 'ru', label: 'ru', flag: '🇷🇺' },
	{ code: 'en', label: 'en', flag: '🇬🇧' },
]

export default function LanguageSwitcher() {
	const router = useRouter()
	const pathname = usePathname()
	const activeLocale = useLocale()
	const [isPending, startTransition] = useTransition()

	const handleChange = locale => {
		if (locale === activeLocale) return
		const segments = pathname.split('/')
		segments[1] = locale
		const newPath = segments.join('/')
		startTransition(() => router.push(newPath))
	}

	return (
		<div className='flex gap-3 items-center'>
			{locales.map(({ code, label, flag }) => (
				<button
					key={code}
					onClick={() => handleChange(code)}
					disabled={isPending}
					className={`flex items-center gap-1 text-sm font-medium transition-colors
						${
							activeLocale === code
								? 'text-blue-600 dark:text-blue-400'
								: 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300'
						}`}
				>
					<span>{flag}</span>
					<span className='uppercase'>{label}</span>
				</button>
			))}
		</div>
	)
}
