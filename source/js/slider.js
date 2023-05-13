const slider = document.querySelector(`.compare-images`)
const curtain = slider.querySelector(`.compare-images__slider`)
let sliderStyles = getComputedStyle(slider)
let curtainPlaceStart
let clientX

window.addEventListener(`pointerup`, stopTheCurtainShifting)
curtain.addEventListener(`pointerdown`, startTheCurtainShifting)

function startTheCurtainShifting (event) {
	curtainPlaceStart = +(sliderStyles.getPropertyValue(`--width`))
	clientX = event.clientX
	window.addEventListener(`pointermove`, shiftТheСurtain)
}

function shiftТheСurtain (event) {
	let deltaX = event.clientX - clientX
	let cursorPlace = curtainPlaceStart + deltaX / slider.clientWidth
	let curtainPlace = Math.min(Math.max(cursorPlace, 0), 1)
	slider.style.setProperty(`--width`, `${curtainPlace}`)
}

function stopTheCurtainShifting () {
	window.removeEventListener(`pointermove`, shiftТheСurtain)
}
