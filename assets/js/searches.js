const engines = {
    'google': 'https://google.com/search?q=',
    'bing': 'https://bing.com/search?q=',
    'duck': 'https://duckduckgo.com/?q=',
    'yahoo': 'https://search.yahoo.com/search?q=',
    'start': 'https://www.startpage.com/search?query=',
    'brave': 'https://search.brave.com/search?q=',
    'ecosia': 'https://www.ecosia.org/search?q='
}

let userEng = localStorage.getItem('userEng') || 'google'

function startEng(name) {
    let img = document.getElementById('engImg')
    if (name == 'bing') {
        userEng = 'bing'
        img.src = 'assets/img/engines/bing.png'
        searchInput.placeholder = `${lang.inputPH} Bing ${lang.extraPH}`
    } else if (name == 'duck') {
        userEng = 'duck'
        img.src = 'assets/img/engines/duckduckgo.png'
        searchInput.placeholder = `${lang.inputPH} DuckDuckGo ${lang.extraPH}`
    } else if (name == 'yahoo') {
        userEng = 'yahoo'
        img.src = 'assets/img/engines/yahoo.png'
        searchInput.placeholder = `${lang.inputPH} Yahoo ${lang.extraPH}`
    } else if (name == 'start') {
        userEng = 'start'
        img.src = 'assets/img/engines/startpage.png'
        searchInput.placeholder = `${lang.inputPH} Startpage ${lang.extraPH}`
    } else if (name == 'brave') {
        userEng = 'brave'
        img.src = 'assets/img/engines/brave.png'
        searchInput.placeholder = `${lang.inputPH} Brave Search ${lang.extraPH}`
    } else if (name == 'ecosia') {
        userEng = 'ecosia',
            img.src = 'assets/img/engines/ecosia.png'
        searchInput.placeholder = `${lang.inputPH} Ecosia ${lang.extraPH}`
    } else if (name == 'google') {
        userEng = 'google'
        img.src = 'assets/img/engines/google.png'
        searchInput.placeholder = `${lang.inputPH} Google ${lang.extraPH}`
    }

    localStorage.setItem('userEng', userEng)
}

document.getElementById('engBtn').addEventListener('click', () => {
    let img = document.getElementById('engImg')
    if (userEng == 'google') {
        userEng = 'bing'
        img.src = 'assets/img/engines/bing.png'
        searchInput.placeholder = `${lang.inputPH} Bing ${lang.extraPH}`
    } else if (userEng == 'bing') {
        userEng = 'duck'
        img.src = 'assets/img/engines/duckduckgo.png'
        searchInput.placeholder = `${lang.inputPH} DuckDuckGo ${lang.extraPH}`
    } else if (userEng == 'duck') {
        userEng = 'yahoo'
        img.src = 'assets/img/engines/yahoo.png'
        searchInput.placeholder = `${lang.inputPH} Yahoo ${lang.extraPH}`
    } else if (userEng == 'yahoo') {
        userEng = 'start'
        img.src = 'assets/img/engines/startpage.png'
        searchInput.placeholder = `${lang.inputPH} Startpage ${lang.extraPH}`
    } else if (userEng == 'start') {
        userEng = 'brave'
        img.src = 'assets/img/engines/brave.png'
        searchInput.placeholder = `${lang.inputPH} Brave Search ${lang.extraPH}`
    } else if (userEng == 'brave') {
        userEng = 'ecosia',
            img.src = 'assets/img/engines/ecosia.png'
        searchInput.placeholder = `${lang.inputPH} Ecosia ${lang.extraPH}`
    } else if (userEng == 'ecosia') {
        userEng = 'google'
        img.src = 'assets/img/engines/google.png'
        searchInput.placeholder = `${lang.inputPH} Google ${lang.extraPH}`
    }

    localStorage.setItem('userEng', userEng)
})

document.getElementById('engBtn').addEventListener('contextmenu', (e) => {
    e.preventDefault()
    e.stopPropagation()
    document.getElementById('cmenu').style.display = 'flex'
    document.getElementById('cmenu').style.left = `${e.clientX}px`
    document.getElementById('cmenu').style.top = `${e.clientY}px`
})

document.getElementById('cmenu').addEventListener('click', e => {
    e.stopPropagation();
    if (e.target.tagName !== 'BUTTON') return;
    let name = e.target.textContent.trim().toLowerCase()
       let img = document.getElementById('engImg')
    if (name == 'bing') {
        userEng = 'bing'
        img.src = 'assets/img/engines/bing.png'
        searchInput.placeholder = `${lang.inputPH} Bing ${lang.extraPH}`
    } else if (name == 'duckduckgo') {
        userEng = 'duck'
        img.src = 'assets/img/engines/duckduckgo.png'
        searchInput.placeholder = `${lang.inputPH} DuckDuckGo ${lang.extraPH}`
    } else if (name == 'yahoo') {
        userEng = 'yahoo'
        img.src = 'assets/img/engines/yahoo.png'
        searchInput.placeholder = `${lang.inputPH} Yahoo ${lang.extraPH}`
    } else if (name == 'startpage') {
        userEng = 'start'
        img.src = 'assets/img/engines/startpage.png'
        searchInput.placeholder = `${lang.inputPH} Startpage ${lang.extraPH}`
    } else if (name == 'brave search') {
        userEng = 'brave'
        img.src = 'assets/img/engines/brave.png'
        searchInput.placeholder = `${lang.inputPH} Brave Search ${lang.extraPH}`
    } else if (name == 'ecosia') {
        userEng = 'ecosia',
            img.src = 'assets/img/engines/ecosia.png'
        searchInput.placeholder = `${lang.inputPH} Ecosia ${lang.extraPH}`
    } else if (name == 'google') {
        userEng = 'google'
        img.src = 'assets/img/engines/google.png'
        searchInput.placeholder = `${lang.inputPH} Google ${lang.extraPH}`
    }

    localStorage.setItem('userEng', userEng)

    closeContext()
});

let recentSearches = localStorage.getItem('recent') || '[]'
recentSearches = JSON.parse(recentSearches)

let bar = document.getElementById('recentAccess')
let searchInput = document.getElementById('searchInput')

function populateBar() {
    bar.innerHTML = ''

    recentSearches.forEach(s => {
        let b = document.createElement('button')
        let i = document.createElement('img')
        i.src = `https://favicon.im/pt/${s}`
        b.append(i)
        b.addEventListener('click', () => {
            let a = document.createElement('a')
            a.href = `http://${s}`
            a.click()
        })
        b.title = s
        bar.append(b)
        b.addEventListener('contextmenu', (e) => {
            e.stopPropagation()
            e.preventDefault()
            recentSearches = recentSearches.filter(i => !i.includes(s))
            localStorage.setItem('recent', JSON.stringify(recentSearches))
            populateBar()
        })
    })

    if (bar.children.length == 0) {
        bar.style.display = 'none'
    } else {
        bar.removeAttribute('style')
    }
}

populateBar()

let timeout;

window.addEventListener("resize", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        populateBar()
        document.documentElement.style.setProperty('--size40', `${window.innerWidth * 0.4}px`)
        document.documentElement.style.setProperty('--size45', `${window.innerWidth * 0.45}px`)
    }, 200);
});

function looksWeb(valor) {
    try {
        const url = new URL(
            valor.startsWith("http") ? valor : "https://" + valor
        );

        // verifica se tem ponto e TLD
        return /\.[a-z]{2,}$/i.test(url.hostname);
    } catch {
        return false;
    }
}
searchInput.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        let a = document.createElement('a')
        if (looksWeb(searchInput.value)) {
            a.href = `http://${searchInput.value}`
        } else {
            a.href = `${engines[userEng]}${searchInput.value}`
        }
        a.target = '__blank'
        a.click()
        searchInput.value = ''
    }
})

searchInput.addEventListener('input', () => {
    if (looksWeb(searchInput.value)) {
        document.getElementById('saveSearch').removeAttribute('style')
    } else {
        document.getElementById('saveSearch').style.display = 'none'
    }
})

document.documentElement.style.setProperty('--size40', `${window.innerWidth * 0.4}px`)
document.documentElement.style.setProperty('--size45', `${window.innerWidth * 0.45}px`)

function capitalize(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

searchInput.placeholder = `${lang.inputPH} ${capitalize(userEng)} ${lang.extraPH}`

document.getElementById('saveSearch').addEventListener('click', () => {
    if (searchInput.value.trim() != '') {
        recentSearches.push(searchInput.value)
        searchInput.value = ''
        document.getElementById('saveSearch').style.display = 'none'
        localStorage.setItem('recent', JSON.stringify(recentSearches))
    } else {
        document.getElementById('saveSearch').style.display = 'none'
    }

    populateBar()
})

startEng(userEng)