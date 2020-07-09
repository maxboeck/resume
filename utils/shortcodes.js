module.exports = {
    icon: function (name, isSocial) {
        const id = name.toLowerCase().replace(/\s/g, '')
        const availableSocialIcons = [
            'github',
            'twitter',
            'linkedin',
            'skype',
            'dribbble',
            'behance',
            'medium',
            'reddit',
            'slack',
            'whatsapp'
        ]
        if (isSocial && !availableSocialIcons.includes(id)) {
            return `<span aria-hidden="true">${name}:&nbsp;</span>`
        }
        return `<svg class="icon icon--${id}" role="img" aria-hidden="true" width="24" height="24">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-${id}"></use>
                </svg>`
    }
}
