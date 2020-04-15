import 'focus-visible'

document.documentElement.classList.remove('no-js')

const printButton = document.querySelector('.js-print')
printButton.addEventListener('click', () => {
    window.print()
})
