const userLang = navigator.language.slice(0, 2);

const langs = {
    'en': {
        'title': 'New Tab',
        'inputPH': 'Start searching here'
    },
    'pt': {
        'title': 'Nova Aba',
        'inputPH': 'Comece a pesquisar por aqui'
    }

}

const lang = langs[userLang]

document.documentElement.lang = userLang
document.title = lang.title
document.getElementById('searchInput').placeholder = lang.inputPH
