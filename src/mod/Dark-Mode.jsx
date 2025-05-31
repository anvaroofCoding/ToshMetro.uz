'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null // Hydration xatolarni oldini oladi

	return (
		<button
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className='px-3 py-1 rounded-xl border border-black/20 dark:border-white/20 hover:scale-105 duration-200 text-black dark:text-white'
		>
			{theme === 'dark' ? '☀️ ' : '🌙 '}
		</button>
	)
}
