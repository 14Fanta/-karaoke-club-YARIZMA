import Modal from './modal.js'
import BurgerMenu from './burger.js'
import { ourGymsSlider } from './our__gyms-slider.js'
import { gymsSelected } from './our-gyms.js'

try {
	new Modal()
  gymsSelected()
	// ourGymsSlider()
  
} catch (error) {
	console.error(error)
}
