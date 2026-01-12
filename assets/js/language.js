const STORAGE_KEY = 'preferredLanguage'
const DEFAULT_LANG = 'de'

function getPreferredLanguage() {
	return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG
}

function setPreferredLanguage(lang) {
	localStorage.setItem(STORAGE_KEY, lang)
}

function showLanguage(lang) {
	document.querySelectorAll('[data-lang]').forEach(element => {
		if (element.getAttribute('data-lang') === lang) {
			element.style.display = ''
		} else {
			element.style.display = 'none'
		}
	})

	document.querySelectorAll('[data-lang-option]').forEach(option => {
		if (option.getAttribute('data-lang-option') === lang) {
			option.classList.add('active')
		} else {
			option.classList.remove('active')
		}
	})

	document.documentElement.lang = lang
}

function initLanguageToggle() {
	const currentLang = getPreferredLanguage()
	showLanguage(currentLang)

	const toggleButton = document.getElementById('langToggle')
	if (toggleButton) {
		toggleButton.addEventListener('click', () => {
			const newLang = currentLang === 'de' ? 'en' : 'de'
			setPreferredLanguage(newLang)
			showLanguage(newLang)
			window.location.reload()
		})
	}
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initLanguageToggle)
} else {
	initLanguageToggle()
}
