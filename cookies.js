function setCookie(nome, valor, dias) {
    let expires = ""
    if (dias) {
        const data = new Date()
        data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000))
        expires = "; expires=" + data.toUTCString()
    }
    document.cookie = nome + "=" + valor + expires + "; path=/"
}

function getCookie(nome) {
    const nomeEQ = nome + "="
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == ' ') c = c.substring(1, c.length)
        if (c.indexOf(nomeEQ) == 0) return c.substring(nomeEQ.length, c.length)
    }
    return null
}

if (!getCookie('claimsEarnbitmoon')) setCookie('claimsEarnbitmoon', 0, 365)
if (!getCookie('statusClaimEarnbitmoon')) setCookie('statusClaimEarnbitmoon', '-', 365)
if (!getCookie('todayProfitEarnbitmoon')) setCookie('todayProfitEarnbitmoon', 0, 365)
if (!getCookie('totalProfitEarnbitmoon')) setCookie('totalProfitEarnbitmoon', 0, 365)
if (!getCookie('lastClaimEarnbitmoon')) setCookie('lastClaimEarnbitmoon', '-', 365)
if (!getCookie('dailyBonusStatusEarnbitmoon')) setCookie('dailyBonusStatusEarnbitmoon', '-', 365)
if (!getCookie('viewAdsStatusEarnbitmoon')) setCookie('viewAdsStatusEarnbitmoon', '-', 365)
if (!getCookie('shortlinksStatusEarnbitmoon')) setCookie('shortlinksStatusEarnbitmoon', '-', 365)
if (!getCookie('achievementsStatusEarnbitmoon')) setCookie('achievementsStatusEarnbitmoon', '-', 365)
if (!getCookie('offerwallsStatusEarnbitmoon')) setCookie('offerwallsStatusEarnbitmoon', '-', 365)

if (!getCookie('claimsBigbtc')) setCookie('claimsBigbtc', 0, 365)
if (!getCookie('statusClaimBigbtc')) setCookie('statusClaimBigbtc', '-', 365)
if (!getCookie('todayProfitBigbtc')) setCookie('todayProfitBigbtc', 0, 365)
if (!getCookie('totalProfitBigbtc')) setCookie('totalProfitBigbtc', 0, 365)
if (!getCookie('lastClaimBigbtc')) setCookie('lastClaimBigbtc', '-', 365)

