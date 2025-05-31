'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export default function MetroStatus() {
	const [status, setStatus] = useState('')
	const [timeNow, setTimeNow] = useState(new Date())
	const t = useTranslations()

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeNow(new Date())
		}, 1000) // har sekundda yangilansin

		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		const hour = timeNow.getHours()
		const minute = timeNow.getMinutes()
		const currentTime = hour * 60 + minute

		const start = 4 * 60 // 04:00
		const end = 23 * 60 // 23:00

		if (currentTime >= start && currentTime < end) {
			setStatus(t('metro_open'))
		} else {
			setStatus(t('metro_closed'))
		}
	}, [timeNow])

	return (
		<div className='p-4 rounded-xl shadow-md bg-white text-center max-w-md mx-auto'>
			<h2 className='text-xl text-black font-bold mb-2'>{t('metro_status')}</h2>
			<p className='text-lg text-black'>{status}</p>
			<p className='text-sm mt-1 text-gray-500'>
				{t('current_time')} {timeNow.toLocaleTimeString('uz-UZ')}
			</p>
		</div>
	)
}
