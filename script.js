 const countdownEl = document.querySelector('.countdown-container')
 const outputMinutes = document.querySelector('.minutes')
 const outputSeconds = document.querySelector('.seconds')

let [interval, time, minutes, seconds] = [null, 63, 0, 0]
const calculateTiming = time => {
 minutes = Math.floor(time/60)
 seconds = time - (minutes * 60)
 if(minutes < 1 )minutes = 0
 if(seconds < 0 )seconds = 59
 
 outputMinutes.textContent = minutes
 outputSeconds.textContent = seconds

 if(minutes === 0 && seconds === 0){
    clearInterval(interval)
    countdownEl.classList.add("timeup")
    countdownEl.textContent = "Time Up"
 }
}
// set the time in seconds  
interval = setInterval(function(){
calculateTiming(time)
time--
}, 1000)



 


