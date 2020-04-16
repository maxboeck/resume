import 'focus-visible'

document.documentElement.classList.remove('no-js')

// Scroll State
const onScroll = () => {
    const scrollClassName = 'js-scrolled'
    const scrollTreshold = 200
    const isOverTreshold = window.scrollY > scrollTreshold

    if (isOverTreshold) {
        document.documentElement.classList.add(scrollClassName)
    } else {
        document.documentElement.classList.remove(scrollClassName)
    }
}
window.addEventListener('scroll', onScroll, { passive: true })

// Print Button
const printButton = document.querySelector('.js-print')
printButton.addEventListener('click', () => {
    window.print()
})
