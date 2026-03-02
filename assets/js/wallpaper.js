const wallpaperApiLink = `https://bing.biturl.top/?resolution=UHD&format=json&index=0&mkt=${navigator.language}`
let showWallpaper = localStorage.getItem('wallpaper') || true
let wallpaper

async function getWallpaper() {
    let apiData = await fetch(wallpaperApiLink)
    let apiJSON = await apiData.json()
    wallpaper = apiJSON.url
    if (showWallpaper == true) {
        document.body.style.backgroundImage = `url(${apiJSON.url})`
    }
}

getWallpaper()