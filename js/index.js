let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "adityasharma",
    "email": "adityasharma@cwh.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "cwh.com",
    "reason": "invalid_mx",
    "mx_found": false,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

submitBtn.addEventListener("click", () => {
    console.log("Clicked!")

    let email = document.getElementById("username").value

    let key = "ema_live_8t2Ix41lMl94vtotqJ6JqNjZIJ8YzszaDJf62jis";
    let url = `https://app.emailvalidation.io/dashboardv1/info?apikey=${key}&email=${email}`

    let str = ``
    for (key of Object.keys(result)) {
        str += `<div>${key} : ${result[key]}</div>`
    }

    console.log(str)
    resultCont.innerHTML = str
})


