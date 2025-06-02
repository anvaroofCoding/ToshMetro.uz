'use client'

const Animationtext1 = () => {
	const text = 'TOSHKENT METROPOLITENI DUK \u00A0\u00A0\u00A0'
	const repeatedText = text.repeat(50)

	return (
		<div className='overflow-hidden whitespace-nowrap relative h-10 font-dmSans'>
			<div className='animate-marquee inline-block text-xl font-bold text-blue-700 dark:text-blue-400'>
				{repeatedText}
			</div>
		</div>
	)
}

export default Animationtext1
