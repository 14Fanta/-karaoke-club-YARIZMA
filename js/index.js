import Modal from './modal.js'
import BurgerMenu from './burger.js'

try {

  new Modal()


	new BurgerMenu({
		BURGER: 'burger-menu',
		BURGER_OPEN: 'burger-menu--open',
		HEADER_MENU: 'header__buttons-wrapper',
		HEADER_MENU_OPEN: 'header__buttons-wrapper--open',
		lABEL: {
			OPEN: 'Открыть меню',
			CLOSE: 'Закрыть меню',
		},
	})
  
} catch (error) {
	console.error(error)
}
