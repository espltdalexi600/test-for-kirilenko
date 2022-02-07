import './styles/styles.scss'

let list = document.querySelector('.services__list')

if (list.addEventListener) {
  if ('onwheel' in document) {
    list.addEventListener('wheel', onWheel)
  } else if ('onmousewheel' in document) {
    list.addEventListener('mousewheel', onWheel)
  } else {
    list.addEventListener('MozMousePixelScroll', onWheel)
  }
} else {
  list.attachEvent('onmousewheel', onWheel)
}

function onWheel(e) {
  e = e || window.event
  e.preventDefault ? e.preventDefault() : (e.returnValue = false)

  const delta = e.deltaY || e.detail || e.wheelDelta
  const target = e.currentTarget

  target.scrollTo({
    left: (target.scrollLeft += delta),
    behavior: 'smooth',
  })
}
