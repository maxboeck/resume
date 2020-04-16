const jsdom = require('jsdom')
const chalk = require('chalk')
const SpellChecker = require('spellchecker')

module.exports = {
    spellcheck: function (content, inputPath) {
        if (inputPath.endsWith('.md') || inputPath.endsWith('.markdown')) {
            const { JSDOM } = jsdom
            const { document } = new JSDOM(content).window
            const spellcheckedElements = [
                ...document.querySelectorAll('[data-spellcheck]')
            ]
            const text = spellcheckedElements
                .map((el) => el.textContent.trim())
                .join(' ')

            const results = SpellChecker.checkSpelling(text)
            if (results.length) {
                results.forEach(({ start, end }) => {
                    const word = text.substring(start, end)
                    console.warn(
                        chalk.yellow(`Linter: check spelling for "${word}"`)
                    )
                })
            }
        }
    }
}
