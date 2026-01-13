function initProjectCards() {
	const projectCards = document.querySelectorAll('.project-card')
	const modal = document.getElementById('project-modal')
	const modalBackdrop = modal.querySelector('.project-modal-backdrop')
	const modalClose = modal.querySelector('.project-modal-close')
	const modalBody = modal.querySelector('.project-modal-body')

	projectCards.forEach(card => {
		card.addEventListener('click', () => {
			openModal(card, modalBody)
		})
	})

	modalBackdrop.addEventListener('click', () => {
		closeModal()
	})

	modalClose.addEventListener('click', () => {
		closeModal()
	})

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && modal.classList.contains('active')) {
			closeModal()
		}
	})
}

function openModal(card, modalBody) {
	const modal = document.getElementById('project-modal')
	const title = card.querySelector('h3').textContent
	const description = card.querySelector('p').textContent
	const techStack = card.querySelector('.tech-stack').innerHTML
	const details = card.querySelector('.project-card-details').innerHTML

	modalBody.innerHTML = `
		<h3>${title}</h3>
		<p>${description}</p>
		<div class='tech-stack'>${techStack}</div>
		${details}
	`

	modal.classList.add('active')
	document.body.style.overflow = 'hidden'
}

function closeModal() {
	const modal = document.getElementById('project-modal')
	modal.classList.remove('active')
	document.body.style.overflow = ''
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initProjectCards)
} else {
	initProjectCards()
}
