export const gymsSelected = () => {
	const sizesList = document.querySelector('[data-sizes="list"]')
	const sizesButtons = document.querySelectorAll('[data-sizes="button"')

	const handleSizeClick = event => {
		const target = event.target

		if (!target?.classList.contains('our__gyms-halls__text')) return

		sizesButtons.forEach(button =>
			button.classList.remove('our__gyms-halls__text-selected'),
		)
		target.classList.add('our__gyms-halls__text-selected')
	}
	sizesList.addEventListener('click', handleSizeClick)
}
