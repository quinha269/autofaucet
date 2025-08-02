// FECHA O POPUP DE STATUS
document.getElementById('btnClosePopupStatus').addEventListener('click', () => {
    document.getElementById('statusFaucet').style.display = 'none'
})

document.getElementById('btnClosePopupTasks').addEventListener('click', () => {
    document.getElementById('tasks').style.display = 'none'
})

function atualizarContador() {

    const agoraLocal = new Date()

    // Obtem data e hora no fuso horário de Brasília
    const agoraBrasilia = new Date(
        agoraLocal.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
    );

    // Define hoje às 21h (Brasília)
    let proximaZeragem = new Date(agoraBrasilia);
    proximaZeragem.setHours(21, 0, 0, 0)

    // Se já passou das 21h, muda para amanhã às 21h
    if (agoraBrasilia >= proximaZeragem) {
        proximaZeragem.setDate(proximaZeragem.getDate() + 1)
        if (!getCookie('claimsEarnbitmoon')) setCookie('claimsEarnbitmoon', 0, 365)
        if (!getCookie('todayProfitEarnbitmoon')) setCookie('todayProfitEarnbitmoon', 0, 365)
        if (!getCookie('totalProfitEarnbitmoon')) setCookie('totalProfitEarnbitmoon', 0, 365)
        if (!getCookie('lastClaimEarnbitmoon')) setCookie('lastClaimEarnbitmoon', '-', 365)
        if (!getCookie('dailyBonusStatusEarnbitmoon')) setCookie('dailyBonusStatusEarnbitmoon', '-', 365)
        if (!getCookie('viewAdsStatusEarnbitmoon')) setCookie('viewAdsStatusEarnbitmoon', '-', 365)
        if (!getCookie('shortlinksStatusEarnbitmoon')) setCookie('shortlinksStatusEarnbitmoon', '-', 365)
        if (!getCookie('achievementsStatusEarnbitmoon')) setCookie('achievementsStatusEarnbitmoon', '-', 365)
        if (!getCookie('offerwallsStatusEarnbitmoon')) setCookie('offerwallsStatusEarnbitmoon', '-', 365)

        if (!getCookie('claimsBigbtc')) setCookie('claimsBigbtc', 0, 365)
        if (!getCookie('todayProfitBigbtc')) setCookie('todayProfitBigbtc', 0, 365)
        if (!getCookie('totalProfitBigbtc')) setCookie('totalProfitBigbtc', 0, 365)
        if (!getCookie('lastClaimBigbtc')) setCookie('lastClaimBigbtc', '-', 365)
    }

    const diff = proximaZeragem - agoraBrasilia;

    const horas = Math.floor(diff / 1000 / 60 / 60);
    const minutos = Math.floor((diff / 1000 / 60) % 60)
    const segundos = Math.floor((diff / 1000) % 60)

    const texto = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`

    document.getElementById("timerReset").textContent = texto

}

setInterval(atualizarContador, 1000)
atualizarContador()