const wallpaperApiLink = `https://bing.biturl.top/?resolution=UHD&format=json&index=0&mkt=${navigator.language}`
let showWallpaper = true

async function getWallpaper() {
    let apiData = await fetch(wallpaperApiLink)
    let apiJSON = await apiData.json()
    if (showWallpaper) {
        document.body.style.backgroundImage = `url(${apiJSON.url})`
    }
}

getWallpaper()