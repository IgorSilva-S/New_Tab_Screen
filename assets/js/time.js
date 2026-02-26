const timeApiLink = 'https://www.timeapi.io/api/time/current/ip?ipAddress=127.0.0.1'
let timeCounter = -1, localStart, date, updateInterval, wDate, apiDate
const AZ = (n) => {
    return ('0' + n).slice(-2)
}

async function getHour() {
    let timeData = await fetch(timeApiLink)
    let timeJSON = await timeData.json()
    apiDate = Date.parse(`${timeJSON.dateTime}Z`)
    localStart = performance.now()
    timeCounter = 0
    writeHour()
    if (updateInterval == undefined) {
        updateInterval = setInterval(() => {
            updateDate()
        }, 1000);
    }
}

function writeHour() {
    wDate = new Date(date)
    if (typeof (date) === 'number') {
        document.getElementById('hour').innerHTML = `${AZ(wDate.getHours())}:${AZ(wDate.getMinutes())}`
    } else {
        document.getElementById('hour').innerHTML = '.........'
    }
}

function updateDate() {
    timeCounter++
    if (timeCounter > 300) {
        clearInterval(updateInterval)
        getHour()
    }
    let timeNow = performance.now() - localStart
    date = apiDate + timeNow
    writeHour()
}

getHour()