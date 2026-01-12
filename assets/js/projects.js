function initProjectCards() {
	const projectCards = document.querySelectorAll('.project-card')

	projectCards.forEach(card => {
		const expandButton = card.querySelector('.expand-button')

		if (expandButton) {
			expandButton.addEventListener('click', (e) => {
				e.stopPropagation()
				toggleCard(card)
			})
		}
	})
}

async function toggleCard(clickedCard) {
	const allCards = document.querySelectorAll('.project-card')
	const isExpanded = clickedCard.classList.contains('expanded')
	const preview = clickedCard.querySelector('.project-card-preview')
	const expanded = clickedCard.querySelector('.project-card-expanded')
	const icon = clickedCard.querySelector('.expand-icon')

	allCards.forEach(card => {
		if (card !== clickedCard && card.classList.contains('expanded')) {
			collapseCard(card)
		}
	})

	preview.style.transition = 'opacity 0.2s ease'
	expanded.style.transition = 'opacity 0.2s ease'

	preview.style.opacity = '0'
	expanded.style.opacity = '0'

	await new Promise(resolve => setTimeout(resolve, 200))

	if (isExpanded) {
		clickedCard.classList.remove('expanded')
		icon.textContent = '↓'
	} else {
		clickedCard.classList.add('expanded')
		icon.textContent = '↑'
	}

	await new Promise(resolve => setTimeout(resolve, 400))

	preview.style.opacity = '1'
	expanded.style.opacity = '1'

	if (!isExpanded) {
		setTimeout(() => {
			clickedCard.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest'
			})
		}, 100)
	}
}

function collapseCard(card) {
	const preview = card.querySelector('.project-card-preview')
	const expanded = card.querySelector('.project-card-expanded')
	const icon = card.querySelector('.expand-icon')

	preview.style.transition = 'opacity 0.2s ease'
	expanded.style.transition = 'opacity 0.2s ease'
	preview.style.opacity = '0'
	expanded.style.opacity = '0'

	setTimeout(() => {
		card.classList.remove('expanded')
		icon.textContent = '↓'
		setTimeout(() => {
			preview.style.opacity = '1'
			expanded.style.opacity = '1'
		}, 400)
	}, 200)
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initProjectCards)
} else {
	initProjectCards()
}
