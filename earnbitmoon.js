const claimTimeEarnbitmoon = 5

if (!localStorage.getItem('timerEarnbitmoon')) localStorage.setItem('timerEarnbitmoon', Date.now())
if (!localStorage.getItem('countdownEarnbitmoon')) localStorage.setItem('countdownEarnbitmoon', Date.now())

// TIMER CLAIM
function formatTimeEarnbitmoon(ms) {
    let totalSeconds = Math.floor(ms / 1000)
    let minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0')
    let seconds = String(totalSeconds % 60).padStart(2, '0')
    return `${minutes}:${seconds}`
}

function updateTimerEarnbitmoon() {
    if (document.getElementById('timerEarnbitmoon').textContent != 'claim' && getCookie('statusClaimEarnbitmoon') != 'paused') {
        let startTime = parseInt(localStorage.getItem('timerEarnbitmoon'), 10)
        let elapsed = Date.now() - startTime
        if (parseInt(getCookie('claimsEarnbitmoon')) < 100) {
            document.getElementById('timerEarnbitmoon').textContent = formatTimeEarnbitmoon(elapsed)
        }
    }
}

// TIMER COUNTDOWN
function formatCountdownEarnbitmoon(ms) {
    let totalSeconds = Math.floor(ms / 1000)
    let minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0')
    let seconds = String(totalSeconds % 60).padStart(2, '0')
    return `${minutes}:${seconds}`
}

function updateCountdownEarnbitmoon() {
    if (document.getElementById('timerEarnbitmoon').textContent == 'claim' && getCookie('statusClaimEarnbitmoon') != 'paused') {
        let startTime = parseInt(localStorage.getItem('countdownEarnbitmoon'), 10)
        let elapsed = Date.now() - startTime
        if (parseInt(getCookie('claimsEarnbitmoon')) < 100) {
            document.getElementById('countdownEarnbitmoon').textContent = formatCountdownEarnbitmoon(elapsed)
        }
    }
}

// RESETA OS CLAIMS DO DIA
function resetClaimsTodayEarnbitmoon() {
    const resetClaimsTodayEarnbitmoonConfirm = window.confirm('CONFIRM RESET ?')
    if (resetClaimsTodayEarnbitmoonConfirm) {
        setCookie('claimsEarnbitmoon', 0, 365)
        document.getElementById('claimsToday').textContent = getCookie('claimsEarnbitmoon')
    }

}

// RESETA O LUCRO DO DIA
function resetTodayProfitEarnbitmoon() {
    const resetTodayProfitEarnbitmoonConfirm = window.confirm('CONFIRM RESET ?')
    if (resetTodayProfitEarnbitmoonConfirm) {
        setCookie('todayProfitEarnbitmoon', 0, 365)
        document.getElementById('todayProfit').textContent = getCookie('todayProfitEarnbitmoon')
    }
}

// RESETA O LUCRO TOTAL
function resetTotalProfitEarnbitmoon() {
    const resetTotalProfitEarnbitmoonConfirm = window.confirm('CONFIRM RESET ?')
    if (resetTotalProfitEarnbitmoonConfirm) {
        setCookie('totalProfitEarnbitmoon', 0, 365)
        document.getElementById('totalProfit').textContent = getCookie('totalProfitEarnbitmoon')
    }
}

// RESETA AS TASKS
function resetTasksEarnbitmoon() {
    const resetTasksEarnbitmoonConfirm = window.confirm('CONFIRM RESET ?')
    if (resetTasksEarnbitmoonConfirm) {
        if (document.getElementsByClassName('nameFaucet')[0].textContent == 'earnbitmoon') {
            setCookie('dailyBonusStatusEarnbitmoon', '-', 365)
            setCookie('viewAdsStatusEarnbitmoon', '-', 365)
            setCookie('shortlinksStatusEarnbitmoon', '-', 365)
            setCookie('achievementsStatusEarnbitmoon', '-', 365)
            setCookie('offerwallsStatusEarnbitmoon', '-', 365)
        }
    }
}

// RESETA O TIMER
document.getElementById('btnResetTimerEarnbitmoon').addEventListener('click', () => {
    localStorage.setItem('timerEarnbitmoon', Date.now())
    document.getElementById('timerEarnbitmoon').textContent = '00:00'
    document.getElementById('timerEarnbitmoon').style.backgroundColor = ''
    document.getElementById('timerEarnbitmoon').style.borderRadius = ''
    document.getElementById('timerEarnbitmoon').style.padding = ''
    document.getElementById('timerEarnbitmoon').style.cursor = ''
    document.getElementById('timerEarnbitmoon').removeAttribute('onclick')
    document.getElementById('statusEarnbitmoon').textContent = '-'
    document.getElementById('countdownEarnbitmoon').textContent = ''
    document.getElementById('countdownEarnbitmoon').style.display = 'none'
    setCookie('statusClaimEarnbitmoon', '-', 365)
})


// PAUSA O TIMER
document.getElementById('btnPauseTimerEarnbitmoon').addEventListener('click', () => {
    localStorage.setItem('timerEarnbitmoon', Date.now())
    document.getElementById('timerEarnbitmoon').textContent = '00:00'
    document.getElementById('timerEarnbitmoon').style.backgroundColor = ''
    document.getElementById('timerEarnbitmoon').style.borderRadius = ''
    document.getElementById('timerEarnbitmoon').style.padding = ''
    document.getElementById('timerEarnbitmoon').style.cursor = ''
    document.getElementById('timerEarnbitmoon').removeAttribute('onclick')
    document.getElementById('statusEarnbitmoon').textContent = '-'
    document.getElementById('countdownEarnbitmoon').textContent = ''
    document.getElementById('countdownEarnbitmoon').style.display = 'none'
    setCookie('statusClaimEarnbitmoon', 'paused', 365)
})

// POPUP STATUS
for (let i = 0; i < document.getElementsByClassName('nameFaucet').length; i++) {
    if (document.getElementsByClassName('nameFaucet')[i].textContent == 'earnbitmoon') {
        document.getElementsByClassName('nameFaucet')[i].addEventListener("click", () => {
            document.getElementById('statusFaucet').style.display = 'block'
            document.getElementById('nameFaucet').textContent = 'earnbitmoon'
            document.getElementById('claimsToday').textContent = getCookie('claimsEarnbitmoon')
            document.getElementById('claimsToday').style.color = '#e84a50'
            document.getElementById('todayProfit').textContent = getCookie('todayProfitEarnbitmoon')
            document.getElementById('todayProfit').style.color = '#2fff00'
            document.getElementById('totalProfit').textContent = getCookie('totalProfitEarnbitmoon')
            document.getElementById('totalProfit').style.color = '#2fff00'
            document.getElementById('btnWithdraw').setAttribute('onclick', 'window.open("https://earnbitmoon.club/","_blank")')
            document.getElementById('resetClaimsToday').setAttribute('onclick', 'resetClaimsTodayEarnbitmoon()')
            document.getElementById('resetTodayProfit').setAttribute('onclick', 'resetTodayProfitEarnbitmoon()')
            document.getElementById('resetTotalProfit').setAttribute('onclick', 'resetTotalProfitEarnbitmoon()')
        })
    }
}

// POPUP TASKS
document.getElementById('dailyTasksEarnbitmoon').addEventListener('click', () => {
    document.getElementById('tasks').style.display = 'block'
    document.getElementById('nameFaucetTasks').textContent = 'earnbitmoon'
    document.getElementById('dailyBonusStatus').textContent = getCookie('dailyBonusStatusEarnbitmoon')
    document.getElementById('viewAdsStatus').textContent = getCookie('viewAdsStatusEarnbitmoon')
    document.getElementById('shortlinksStatus').textContent = getCookie('shortlinksStatusEarnbitmoon')
    document.getElementById('achievementsStatus').textContent = getCookie('achievementsStatusEarnbitmoon')
    document.getElementById('offerwallsStatus').textContent = getCookie('offerwallsStatusEarnbitmoon')
    document.getElementById('btnDailyBonus').setAttribute('onclick', 'window.open("https://earnbitmoon.club/bonus.html","_blank")')
    document.getElementById('resetTasks').setAttribute('onclick', 'resetTasksEarnbitmoon()')
})

// ATUALIZA O STATUS DA FAUCET
setInterval(() => {

    document.getElementById('todayProfitEarnbitmoon').textContent = getCookie('todayProfitEarnbitmoon')
    document.getElementById('lastClaimEarnbitmoon').textContent = getCookie('lastClaimEarnbitmoon')

    if (getCookie('todayProfitEarnbitmoon') == 0) {
        document.getElementById('todayProfitEarnbitmoon').textContent = '0.0000'
    }

    if (parseInt(document.getElementById('timerEarnbitmoon').textContent.slice(0, 2)) < claimTimeEarnbitmoon && parseInt(getCookie('claimsEarnbitmoon')) != 100) {
        localStorage.setItem('countdownEarnbitmoon', Date.now())
        document.getElementById('statusEarnbitmoon').textContent = getCookie('statusClaimEarnbitmoon')
    }

    if (parseInt(document.getElementById('timerEarnbitmoon').textContent.slice(0, 2)) >= claimTimeEarnbitmoon || document.getElementById('timerEarnbitmoon').textContent == 'claim') {
        document.getElementById('statusEarnbitmoon').textContent = getCookie('statusClaimEarnbitmoon')
        document.getElementById('timerEarnbitmoon').textContent = 'claim'
        document.getElementById('timerEarnbitmoon').style.backgroundColor = '#b50e30'
        document.getElementById('timerEarnbitmoon').style.borderRadius = '10px'
        document.getElementById('timerEarnbitmoon').style.padding = '20px'
        document.getElementById('timerEarnbitmoon').style.cursor = 'pointer'
        document.getElementById('timerEarnbitmoon').setAttribute('onclick', 'window.open("https://earnbitmoon.club/","_blank")')
        document.getElementById('countdownEarnbitmoon').style.display = 'block'
    }

    // DEPOIS QUE COLETA
    if ((getCookie('statusClaimEarnbitmoon') == 'claimed')) {
        document.getElementById('countdownEarnbitmoon').textContent = ''
        document.getElementById('countdownEarnbitmoon').style.display = 'none'
        setCookie('claimsEarnbitmoon', parseInt(getCookie('claimsEarnbitmoon')) + 1, 365)
        document.getElementById('timerEarnbitmoon').textContent = '00:00'
        document.getElementById('timerEarnbitmoon').style.backgroundColor = ''
        document.getElementById('timerEarnbitmoon').style.borderRadius = ''
        document.getElementById('timerEarnbitmoon').style.padding = ''
        document.getElementById('timerEarnbitmoon').style.cursor = ''
        document.getElementById('timerEarnbitmoon').removeAttribute('onclick')
        document.getElementById('statusEarnbitmoon').textContent = '-'
        localStorage.setItem('timerEarnbitmoon', Date.now())
        setCookie('valueClaimedEarnbitmoon', 0, 365)
        setCookie('statusClaimEarnbitmoon', '-', 365)
        const date = new Date()
        const hoursEarnbitmoon = date.getHours()
        const minutesEarnbitmoon = date.getMinutes()
        const lastClaimEarnbitmoon = hoursEarnbitmoon + ':' + minutesEarnbitmoon
        setCookie('lastClaimEarnbitmoon', lastClaimEarnbitmoon, 365)
        document.getElementById('lastClaimEarnbitmoon').textContent = getCookie('lastClaimEarnbitmoon')
    }

    const statusTasks = [
        { statusId: 'dailyBonusStatus', cookieName: 'dailyBonusStatusEarnbitmoon', btnId: 'btnDailyBonus' },
        { statusId: 'viewAdsStatus', cookieName: 'viewAdsStatusEarnbitmoon', btnId: 'btnViewAds' },
        { statusId: 'shortlinksStatus', cookieName: 'shortlinksStatusEarnbitmoon', btnId: 'btnShortlinks' },
        { statusId: 'achievementsStatus', cookieName: 'achievementsStatusEarnbitmoon', btnId: 'btnAchievements' },
        { statusId: 'offerwallsStatus', cookieName: 'offerwallsStatusEarnbitmoon', btnId: 'btnOfferwalls' }
    ];

    statusTasks.forEach(({ statusId, cookieName, btnId }) => {
        const statusElement = document.getElementById(statusId)
        const buttonElement = document.getElementById(btnId)
        const statusValue = getCookie(cookieName)

        statusElement.textContent = statusValue

        if (statusValue !== 'complete') {
            buttonElement.style.opacity = '1'
            statusElement.style.color = ''
        } else {
            statusElement.style.color = '#7cf78e'
            buttonElement.style.opacity = '0'
        }
    });

}, 10)

// CLICA NO BOTÃO DE CLAIM
const openClaimEarnbitmoon = setInterval(() => {
    if (document.getElementById('timerEarnbitmoon').textContent == 'claim') {
        if (getCookie('statusClaimEarnbitmoon') != 'claiming' && getCookie('statusClaimEarnbitmoon') != 'claimed') {
            setCookie('statusClaimEarnbitmoon', 'claiming', 365)
            setTimeout(() => {
                document.getElementById('timerEarnbitmoon').click()
            }, 1500)
        }
    }
}, 10)

// SE A COLETA NÃO FOR FEITA EM 2MIN, CLICA NO BOTÃO DE CLAIM NOVAMENTE
const openClaimCountdownEarnbitmoon = setInterval(() => {
    if (document.getElementById('timerEarnbitmoon').textContent == 'claim') {
        if (getCookie('statusClaimEarnbitmoon') == 'claiming' && parseInt(document.getElementById('countdownEarnbitmoon').textContent.slice(0, 2)) >= 2) {
            localStorage.setItem('countdownEarnbitmoon', Date.now())
            document.getElementById('timerEarnbitmoon').click()
        }
    }
}, 10)

updateTimerEarnbitmoon()
updateCountdownEarnbitmoon()
setInterval(updateTimerEarnbitmoon, 1000)
setInterval(updateCountdownEarnbitmoon, 10)