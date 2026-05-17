export const ourGymsSlider = () => {
	new Swiper('.product__slider', {
		slidesPerView: 'auto',
		centeredSlides: true,
		loop: true,
		mousewheel: {
			forceToAxis: true,
		},
		navigation: {
			prevEl: '.our__gyms-buttons-btn_left',
			nextEl: '.our__gyms-buttons-right',
		},
	})
}
