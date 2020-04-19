const fs = require('fs')
const path = require('path')
const mime = require('mime/lite')
const { DateTime } = require('luxon')
const isEmpty = require('lodash/isEmpty')

module.exports = {
    dateToFormat: function (date, format) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(
            String(format)
        )
    },

    dateToISO: function (date) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toISO({
            includeOffset: false,
            suppressMilliseconds: true
        })
    },

    obfuscate: function (str) {
        const chars = []
        for (var i = str.length - 1; i >= 0; i--) {
            chars.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
        }
        return chars.join('')
    },

    stripSpaces: function (str) {
        return str.replace(/\s/g, '')
    },

    stripProtocol: function (str) {
        return str.replace(/(^\w+:|^)\/\//, '')
    },

    base64file: function (file) {
        const filepath = path.join(__dirname, `../src/${file}`)
        const mimeType = mime.getType(file)
        const buffer = Buffer.from(fs.readFileSync(filepath))

        return `data:${mimeType};base64,${buffer.toString('base64')}`
    },

    themeColors: function (colors) {
        let style = ''
        if (!colors || isEmpty(colors)) {
            return ''
        }
        if (colors.primary) {
            style += `--primary-color:${colors.primary};`
        }
        if (colors.secondary) {
            style += `--secondary-color:${colors.secondary};`
        }
        return style
    }
}
