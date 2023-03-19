const countdownEl = document.querySelector('.countdown-container')
const outputMinutes = document.querySelector('.minutes')
const outputSeconds = document.querySelector('.seconds')

let [interval, totalSeconds, minutes, seconds] = [null, 0, 0, 0]
const enteredTime = prompt("Please enter the minutes and seconds with a space")

const calculateSeconds = () => {
    const [enteredMinutes, enteredSeconds] = enteredTime.split(' ')
    totalSeconds = Number(enteredMinutes) * 60 + Number(enteredSeconds)
}
calculateSeconds()
const displayTiming = totalSeconds => {
    minutes = Math.floor(totalSeconds / 60)
    seconds = totalSeconds % 60
    if (minutes < 1) minutes = 0
    if (seconds < 0) seconds = 59
    outputMinutes.textContent = minutes
    outputSeconds.textContent = seconds

    if (minutes === 0 && seconds === 0) {
        clearInterval(interval)
        countdownEl.classList.add("timeup")
        countdownEl.textContent = "Time Up"
    }
}

// set the time in seconds
interval = setInterval(() => {
    displayTiming(totalSeconds)
    totalSeconds--
}, 1000)
