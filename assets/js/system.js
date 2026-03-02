function closeContext() {
    document.getElementById('cmenu').className = 'closeContextMenu'
    document.getElementById('settingCM').className = 'closeContextMenu'
    setTimeout(() => {
        document.getElementById('cmenu').removeAttribute('style')
        document.getElementById('cmenu').className = 'contextMenu'
        document.getElementById('settingCM').removeAttribute('style')
        document.getElementById('settingCM').className = 'contextMenu'
    }, 130);
}

document.addEventListener('click', closeContext)

document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    document.getElementById('settingCM').style.display = 'flex'
    document.getElementById('settingCM').style.top = `${e.clientY}px`
    document.getElementById('settingCM').style.left = `${e.clientX}px`

    if (showWallpaper == true) {
        document.getElementById('wallpaperToggle').innerHTML = `<span type="icon">&#xE91B;</span> ${lang.wallHide}`
    } else {
        document.getElementById('wallpaperToggle').innerHTML = `<span type="icon">&#xE91B;</span> ${lang.wallShow}`
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
    closeContext()
})

document.getElementById('clear').addEventListener('click', () => {
    localStorage.clear()
    document.location = 'index.html'
})