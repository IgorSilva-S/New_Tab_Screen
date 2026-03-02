const userLang = navigator.language.slice(0, 2);

const langs = {
    'en': {
        'title': 'New Tab',
        'weekday': {
            0: 'Sunday',
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday'
        },
        'month': {
            0: 'january',
            1: 'february',
            2: 'march',
            3: 'april',
            4: 'may',
            5: 'june',
            6: 'july',
            7: 'august',
            8: 'september',
            9: 'october',
            10: 'november',
            11: 'december'
        },
        'watchDivider': ',',
        'inputPH': 'Search with',
        'extraPH': 'or insert a link',
        'engineButtonHint': 'Right-click to choose your search engine',
        'wallShow': 'Show wallpaper',
        'wallHide': 'Hide wallpaper',
        'clear': 'Clear data'
    },
    'pt': {
        'title': 'Nova Aba',
        'weekday': {
            0: 'Domingo',
            1: 'Segunda',
            2: 'Terça',
            3: 'Quarta',
            4: 'Quinta',
            5: 'Sexta',
            6: 'Sábado'
        },
        'month': {
            0: 'janeiro',
            1: 'fevereiro',
            2: 'março',
            3: 'abril',
            4: 'maio',
            5: 'junho',
            6: 'julho',
            7: 'agosto',
            8: 'setembro',
            9: 'outubro',
            10: 'novembro',
            11: 'dezembro'
        },
        'watchDivider': ' de',
        'inputPH': 'Pesquisar com',
        'extraPH': 'ou insira um link',
        'engineButtonHint': 'Pressione com o botão direito para escolher o seu mecanismo de pesquisa',
        'wallShow': 'Mostrar papel de parede',
        'wallHide': 'Esconder papel de parede',
        'clear': 'Limpar dados'
    }

}

const lang = langs[userLang]

document.documentElement.lang = userLang
document.title = lang.title
document.getElementById('engBtn').title = lang.engineButtonHint
document.getElementById('clear').innerHTML = `<span type="icon">&#xE75C;</span> ${lang.clear}`