<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Profits</title>
    <style>
        @font-face {
            font-family: 'PressStart2P-vaV7';
            src: url('PressStart2P-vaV7.ttf');
        }

        body {
            font-family: 'PressStart2P-vaV7';
            background-color: #000000;
        }

        .inputStatus {
            display: none;
        }

        .status {
            width: 500px;
            height: 280px;
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            text-transform: uppercase;
        }
    </style>
</head>

<body>

    <?php

    #Earnbitmoon
    $todayProfitsEarnbitmoon = isset($_POST['todayProfitsEarnbitmoon']) ? $_POST['todayProfitsEarnbitmoon'] : '';
    if ($todayProfitsEarnbitmoon != '') {
        echo "<input type='text' id='todayProfitsEarnbitmoon' class='inputStatus' value='{$todayProfitsEarnbitmoon}'>";
        echo "<div id='statusUpdateProfitsEarnbitmoon' class='status'>Earnbitmoon <br><br> Profit Updated<br><br><br><br>Wait 5 seconds...</div>";
    }

    $statusDailyBonusEarnbitmoon = isset($_POST['statusDailyBonusEarnbitmoon']) ? $_POST['statusDailyBonusEarnbitmoon'] : '';
    if ($statusDailyBonusEarnbitmoon != '') {
        echo "<input type='text' id='statusDailyBonusEarnbitmoon' class='inputStatus' value='{$statusDailyBonusEarnbitmoon}'>";
        echo "<div id='statusUpdateDailyBonusEarnbitmoon' class='status'>Earnbitmoon <br><br>Daily Bonus Claimed<br><br><br><br>Wait 5 seconds...</div>";
    }

    $statusViewAdsEarnbitmoon = isset($_POST['statusViewAdsEarnbitmoon']) ? $_POST['statusViewAdsEarnbitmoon'] : '';
    if ($statusViewAdsEarnbitmoon != '') {
        echo "<input type='text' id='statusViewAdsEarnbitmoon' class='inputStatus' value='{$statusViewAdsEarnbitmoon}'>";
        echo "<div id='statusUpdateViewAdsEarnbitmoon' class='status'>Earnbitmoon <br><br>View Ads Claimed<br><br><br><br>Wait 5 seconds...</div>";
    }

    ?>

    <script src="cookies.js"></script>
    <script src="update-profits.js"></script>

</body>

</html>