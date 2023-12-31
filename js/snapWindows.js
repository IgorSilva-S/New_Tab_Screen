//Aviso para o programador futuramente:
//
//Arrumar os Modos de Snap
//app.style.width = 'calc(50vw - 0.5%)'
//app.style.left = '0%' (À Esquerda)
//app.style.left = '49.5%' (À Direita)
//app.style.borderRadius = '0' (Quando dividido)
//app.style.borderRadius = '8px' (Quando voltar ao normal)

//Snap Notepad

function npL50() {
  let app = document.getElementById('NpApp')
  let icon = document.getElementById('iconMaxMinNP')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = '50vw';
  app.style.height = 'calc(100vh - 40px)';
  app.style.left = '0';
  app.style.top = '40px'
  icon.src = 'img/WindowIcons/Maximize.png'
}

function npR50() {
  let app = document.getElementById('NpApp')
  let icon = document.getElementById('iconMaxMinNP')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = '50vw';
  app.style.height = 'calc(100vh - 40px)';
  app.style.left = '49%';
  app.style.top = '40px'
  icon.src = 'img/WindowIcons/Maximize.png'
}

function npLT() {
  let app = document.getElementById('NpApp')
  let icon = document.getElementById('iconMaxMinNP')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = '50vw';
  app.style.height = 'calc(50vh - 40px)';
  app.style.left = '0';
  app.style.top = '40px'
  icon.src = 'img/WindowIcons/Maximize.png'
}

function npRT() {
  let app = document.getElementById('NpApp')
  let icon = document.getElementById('iconMaxMinNP')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = '50vw';
  app.style.height = 'calc(50vh - 40px)';
  app.style.left = '49%';
  app.style.top = '40px'
  icon.src = 'img/WindowIcons/Maximize.png'
}

function npLB() {
  let app = document.getElementById('NpApp')
  let icon = document.getElementById('iconMaxMinNP')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = '50vw';
  app.style.height = 'calc(50vh - 40px)';
  app.style.left = '0';
  app.style.top = 'calc(50vh + 40px)';
  icon.src = 'img/WindowIcons/Maximize.png'
}

function npRB() {
  let app = document.getElementById('NpApp')
  let icon = document.getElementById('iconMaxMinNP')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = '50vw';
  app.style.height = 'calc(50vh - 40px)';
  app.style.left = '49%';
  app.style.top = 'calc(50vh + 40px)';
  icon.src = 'img/WindowIcons/Maximize.png'
}

function npT() {
  let app = document.getElementById('NpApp')
  let icon = document.getElementById('iconMaxMinNP')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = 'calc(100vw - 1%)';
  app.style.height = 'calc(50vh - 40px)';
  app.style.left = '0';
  app.style.top = '40px';
  icon.src = 'img/WindowIcons/Maximize.png'
}

function npB() {
  let app = document.getElementById('NpApp')
  let icon = document.getElementById('iconMaxMinNP')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = 'calc(100vw - 1%)';
  app.style.height = 'calc(50vh - 40px)';
  app.style.left = '0';
  app.style.top = 'calc(50vh + 40px)';
  icon.src = 'img/WindowIcons/Maximize.png'
}

//Snap Music Player

function mpL50() {
  let app = document.getElementById('mpApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = '50vw';
  app.style.height = 'calc(100vh - 40px)';
  app.style.left = '0';
  app.style.top = '0'
  icon.src = 'img/WindowIcons/Maximize.png'
}

function mpR50() {
  let app = document.getElementById('mpApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = '50vw';
  app.style.height = 'calc(100vh - 40px)';
  app.style.left = '49%';
  app.style.top = '0'
  icon.src = 'img/WindowIcons/Maximize.png'
}

function mpLT() {
  let app = document.getElementById('mpApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = '50vw';
  app.style.height = '50vh';
  app.style.left = '0';
  app.style.top = '0'
  icon.src = 'img/WindowIcons/Maximize.png'
}

function mpRT() {
  let app = document.getElementById('mpApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = '50vw';
  app.style.height = '50vh';
  app.style.left = '49%';
  app.style.top = '0'
  icon.src = 'img/WindowIcons/Maximize.png'
}

function mpLB() {
  let app = document.getElementById('mpApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = '50vw';
  app.style.height = '50vh';
  app.style.left = '0';
  app.style.top = 'calc(50vh - 40px)';
  icon.src = 'img/WindowIcons/Maximize.png'
}

function mpRB() {
  let app = document.getElementById('mpApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = '50vw';
  app.style.height = '50vh';
  app.style.left = '49%';
  app.style.top = 'calc(50vh - 40px)';
  icon.src = 'img/WindowIcons/Maximize.png'
}

function mpT() {
  let app = document.getElementById('mpApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = 'calc(100vw - 1%)';
  app.style.height = '50vh';
  app.style.left = '0';
  app.style.top = '0';
  icon.src = 'img/WindowIcons/Maximize.png'
}

function mpB() {
  let app = document.getElementById('mpApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = 'calc(100vw - 1%)';
  app.style.height = '50vh';
  app.style.left = '0';
  app.style.top = 'calc(50vh - 40px)';;
  icon.src = 'img/WindowIcons/Maximize.png'
}

//Snap Ghost Game

function ghL50() {
  let app = document.getElementById('ghostApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.style.width = '50vw';
  app.style.height = 'calc(100vh - 40px)';
  app.style.left = '0';
  app.style.top = '0'
  icon.src = 'img/WindowIcons/Maximize.png'
}

function ghR50() {
  let app = document.getElementById('ghostApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.style.width = '50vw';
  app.style.height = 'calc(100vh - 40px)';
  app.style.left = '49%';
  app.style.top = '0'
  icon.src = 'img/WindowIcons/Maximize.png'
}

function ghLT() {
  let app = document.getElementById('ghostApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.style.width = '50vw';
  app.style.height = '50vh';
  app.style.left = '0';
  app.style.top = '0'
  icon.src = 'img/WindowIcons/Maximize.png'
}

function ghRT() {
  let app = document.getElementById('ghostApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.style.width = '50vw';
  app.style.height = '50vh';
  app.style.left = '49%';
  app.style.top = '0'
  icon.src = 'img/WindowIcons/Maximize.png'
}

function ghLB() {
  let app = document.getElementById('ghostApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.style.width = '50vw';
  app.style.height = '50vh';
  app.style.left = '0';
  app.style.top = 'calc(50vh - 40px)';
  icon.src = 'img/WindowIcons/Maximize.png'
}

function ghRB() {
  let app = document.getElementById('ghostApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.style.width = '50vw';
  app.style.height = '50vh';
  app.style.left = '49%';
  app.style.top = 'calc(50vh - 40px)';
  icon.src = 'img/WindowIcons/Maximize.png'
}

function ghT() {
  let app = document.getElementById('ghostApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.style.width = 'calc(100vw - 1%)';
  app.style.height = '50vh';
  app.style.left = '0';
  app.style.top = '0';
  icon.src = 'img/WindowIcons/Maximize.png'
}

function ghB() {
  let app = document.getElementById('ghostApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.style.width = 'calc(100vw - 1%)';
  app.style.height = '50vh';
  app.style.left = '0';
  app.style.top = 'calc(50vh - 40px)';;
  icon.src = 'img/WindowIcons/Maximize.png'
}

//Settings Snap 

function stL50() {
  let app = document.getElementById('settingApp')
  let icon = document.getElementById('iconMaxMinSetting')
  let closeButton = document.getElementById('setting')
  app.style.transitionDuration = '.2s'
  app.style.width = '50vw';
  app.style.height = 'calc(100vh - 40px)';
  app.style.left = '0';
  app.style.top = '0'
  app.style.borderRadius = '0'
  closeButton.style.borderRadius = '0'
  icon.src = 'img/WindowIcons/Maximize.png'
  setTimeout(() => {
    app.style.transitionDuration = '0'
  }, 1);
}

function ghR50() {
  let app = document.getElementById('ghostApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.style.width = '50vw';
  app.style.height = 'calc(100vh - 40px)';
  app.style.left = '49%';
  app.style.top = '0'
  icon.src = 'img/WindowIcons/Maximize.png'
}

function ghLT() {
  let app = document.getElementById('ghostApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.style.width = '50vw';
  app.style.height = '50vh';
  app.style.left = '0';
  app.style.top = '0'
  icon.src = 'img/WindowIcons/Maximize.png'
}

function ghRT() {
  let app = document.getElementById('ghostApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.style.width = '50vw';
  app.style.height = '50vh';
  app.style.left = '49%';
  app.style.top = '0'
  icon.src = 'img/WindowIcons/Maximize.png'
}

function ghLB() {
  let app = document.getElementById('ghostApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.style.width = '50vw';
  app.style.height = '50vh';
  app.style.left = '0';
  app.style.top = 'calc(50vh - 40px)';
  icon.src = 'img/WindowIcons/Maximize.png'
}

function ghRB() {
  let app = document.getElementById('ghostApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.style.width = '50vw';
  app.style.height = '50vh';
  app.style.left = '49%';
  app.style.top = 'calc(50vh - 40px)';
  icon.src = 'img/WindowIcons/Maximize.png'
}

function ghT() {
  let app = document.getElementById('ghostApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.style.width = 'calc(100vw - 1%)';
  app.style.height = '50vh';
  app.style.left = '0';
  app.style.top = '0';
  icon.src = 'img/WindowIcons/Maximize.png'
}

function ghB() {
  let app = document.getElementById('ghostApp')
  let icon = document.getElementById('iconMaxMinMP')
  app.style.width = 'calc(100vw - 1%)';
  app.style.height = '50vh';
  app.style.left = '0';
  app.style.top = 'calc(50vh - 40px)';;
  icon.src = 'img/WindowIcons/Maximize.png'
}

// Mutual Snap

function l50(id) {
  let app = document.getElementById(id + 'App')
  let icon = document.getElementById('iconMaxMin' + id)
  app.style.transitionDuration = '.2s'
  app.style.width = '50vw';
  app.style.height = 'calc(100vh - 40px)';
  app.style.left = '0';
  app.style.top = '0'
  app.style.borderRadius = '0'
  icon.src = 'img/WindowIcons/Maximize.png'
  setTimeout(() => {
    app.style.transitionDuration = '0'
  }, 1);
}

//Responsive Snap

//Snap notepad 

function npTM() {
  let app = document.getElementById('NpApp')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = '100vw';
  app.style.height = '50vh';
  app.style.left = '0';
  app.style.top = '0';
}

function npBM() {
  let app = document.getElementById('NpApp')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = '100vw';
  app.style.height = '50vh';
  app.style.left = '0';
  app.style.top = '50vh';
}

function npMax() {
  let app = document.getElementById('NpApp')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = '100vw';
  app.style.height = '100vh';
  app.style.left = '0';
  app.style.top = '0';
}

// Snap Music Player

function mpTM() {
  let app = document.getElementById('mpApp')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = '100vw';
  app.style.height = '50vh';
  app.style.left = '0';
  app.style.top = '0';
}

function mpBM() {
  let app = document.getElementById('mpApp')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = '100vw';
  app.style.height = '50vh';
  app.style.left = '0';
  app.style.top = '50vh';
}

function mpMax() {
  let app = document.getElementById('mpApp')
  app.removeAttribute('style')
  app.style.transform = 'scale(1)'
  app.style.width = '100vw';
  app.style.height = '100vh';
  app.style.left = '0';
  app.style.top = '0';
}


// Snap Ghost

function ghTM() {
  let app = document.getElementById('ghostApp')
  app.style.width = '100vw';
  app.style.height = '50vh';
  app.style.left = '0';
  app.style.top = '0';
}

function ghBM() {
  let app = document.getElementById('ghostApp')
  app.style.width = '100vw';
  app.style.height = '50vh';
  app.style.left = '0';
  app.style.top = '50vh';
}

function ghostMax() {
  let app = document.getElementById('ghostApp')
  app.style.width = '100vw';
  app.style.height = '100vh';
  app.style.left = '0';
  app.style.top = '0';
}
