document.addEventListener('click', () => {
    document.getElementById('cmenu').removeAttribute('style')
    document.getElementById('settingCM').removeAttribute('style')
})

document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    document.getElementById('settingCM').style.display = 'flex'
    document.getElementById('settingCM').style.top = `${e.clientY}px`
    document.getElementById('settingCM').style.left = `${e.clientX}px`

    if (showWallpaper == true) {
        document.getElementById('wallpaperToggle').innerText = lang.wallHide
    } else {
        document.getElementById('wallpaperToggle').innerText = lang.wallShow
    }
})

document.getElementById('settingCM').addEventListener('click', (e) => {
    e.stopPropagation()
})

document.getElementById('wallpaperToggle').addEventListener('click', () => {
    if (showWallpaper == true) {
        showWallpaper = false
        document.body.removeAttribute('style')
    } else {
        showWallpaper = true
        document.body.style.backgroundImage = `url(${wallpaper})`
    }

    localStorage.setItem('wallpaper', showWallpaper)
    document.getElementById('settingCM').removeAttribute('style')
})

document.getElementById('clear').addEventListener('click', () => {
    localStorage.clear()
    document.location = 'index.html'
})