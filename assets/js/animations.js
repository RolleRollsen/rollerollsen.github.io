function initScrollAnimations() {
	const observerOptions = {
		threshold: 0.15,
		rootMargin: '0px 0px -50px 0px'
	}

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible')
				observer.unobserve(entry.target)
			}
		})
	}, observerOptions)

	document.querySelectorAll('.fade-in').forEach(element => {
		observer.observe(element)
	})
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initScrollAnimations)
} else {
	initScrollAnimations()
}
