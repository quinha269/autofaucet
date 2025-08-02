const addTodayProfitsEarnbitmoon = setInterval(() => {
    if (document.getElementById('todayProfitsEarnbitmoon')) {
        if (document.getElementById('todayProfitsEarnbitmoon').value != '') {
            const todayProfitsEarnbitmoon = document.getElementById('todayProfitsEarnbitmoon').value
            setCookie('todayProfitEarnbitmoon', todayProfitsEarnbitmoon, 365)
            setCookie('totalProfitEarnbitmoon', getCookie('todayProfitEarnbitmoon'), 365)
            setCookie('statusClaimEarnbitmoon', 'claimed', 365)
            document.getElementById('todayProfitsEarnbitmoon').value = ''
            clearInterval(addTodayProfitsEarnbitmoon)
            setTimeout(() => {
                window.close()
            }, 6000)
        }
    }
}, 10)

const addStatusDailyBonusEarnbitmoon = setInterval(() => {
    if (document.getElementById('statusDailyBonusEarnbitmoon')) {
        if (document.getElementById('statusDailyBonusEarnbitmoon').value != '') {
            const statusDailyBonusEarnbitmoon = document.getElementById('statusDailyBonusEarnbitmoon').value
            setCookie('dailyBonusStatusEarnbitmoon', statusDailyBonusEarnbitmoon, 365)
            clearInterval(addStatusDailyBonusEarnbitmoon)
            setTimeout(() => {
                window.close()
            }, 6000)
        }
    }
}, 10)

const addStatusViewAdsEarnbitmoon = setInterval(() => {
    if (document.getElementById('statusViewAdsEarnbitmoon')) {
        if (document.getElementById('statusViewAdsEarnbitmoon').value != '') {
            const statusViewAdsEarnbitmoon = document.getElementById('statusViewAdsEarnbitmoon').value
            setCookie('viewAdsStatusEarnbitmoon', statusViewAdsEarnbitmoon, 365)
            clearInterval(addStatusViewAdsEarnbitmoon)
            setTimeout(() => {
                window.close()
            }, 6000)
        }
    }
}, 10)