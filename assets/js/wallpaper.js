const wallpaperApiLink = `https://bing.biturl.top/?resolution=UHD&format=json&index=0&mkt=${navigator.language}`

async function getWallpaper() {
    let apiData = await fetch(wallpaperApiLink)
    let apiJSON = await apiData.json()
    document.body.style.backgroundImage = `url(${apiJSON.url})`
}

getWallpaper()