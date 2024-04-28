const menu = document.getElementById('menu__body')
const openMenuButton = document.getElementById('menu-open__button')
const closeMenuButton = document.getElementById('menu-close__button')

const openMenu = () => {
	menu?.classList.add('show')
}

const closeMenu = () => {
	menu?.classList.remove('show')
}

export const menuInit = () => {
	openMenuButton?.addEventListener('click', openMenu)
	closeMenuButton?.addEventListener('click', closeMenu)
}
