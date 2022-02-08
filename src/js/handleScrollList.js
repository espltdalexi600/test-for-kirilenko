import isMobile from './isMobile'

const list = document.querySelector('.services__list')
const services = document.querySelector('.services')

function handleScrollList() {
  if (isMobile()) return

  if (document.addEventListener) {
    if ('onwheel' in document) {
      document.addEventListener('wheel', onWheel, { passive: false })
    } else if ('onmousewheel' in document) {
      document.addEventListener('mousewheel', onWheel, { passive: false })
    } else {
      document.addEventListener('MozMousePixelScroll', onWheel, {
        passive: false,
      })
    }
  } else {
    document.attachEvent('onmousewheel', onWheel, { passive: false })
  }
}

function onWheel(e) {
  const result = checkServicesPosition()

  if (result < 0 || result > 300) return

  e = e || window.event

  const delta = e.deltaY || e.detail || e.wheelDelta
  const listScroll = list.scrollLeft
  const listWidth = list.scrollWidth
  const listClientWidth = list.clientWidth

  if (delta > 0) {
    if (listScroll + listClientWidth !== listWidth) {
      e.preventDefault ? e.preventDefault() : (e.returnValue = false)
      list.scrollLeft += 950
    }
  } else {
    if (listScroll !== 0) {
      e.preventDefault ? e.preventDefault() : (e.returnValue = false)
      list.scrollLeft -= 950
    }
  }
}

function checkServicesPosition() {
  const windowScroll = window.pageYOffset
  const servicesBottom = services.getBoundingClientRect().bottom + windowScroll
  const windowBottom = document.documentElement.clientHeight + windowScroll

  const result = windowBottom - servicesBottom

  return result
}

export default handleScrollList
