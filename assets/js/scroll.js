function initSmoothScroll() {
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function(e) {
			const href = this.getAttribute('href')

			if (href === '#' || href === '') {
				return
			}

			const target = document.querySelector(href)
			if (target) {
				e.preventDefault()
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			}
		})
	})
}

function initBackToTop() {
	const backToTopButton = document.getElementById('backToTop')
	if (!backToTopButton) return

	window.addEventListener('scroll', () => {
		if (window.scrollY > 300) {
			backToTopButton.classList.add('visible')
		} else {
			backToTopButton.classList.remove('visible')
		}
	})

	backToTopButton.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	})
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => {
		initSmoothScroll()
		initBackToTop()
	})
} else {
	initSmoothScroll()
	initBackToTop()
}
