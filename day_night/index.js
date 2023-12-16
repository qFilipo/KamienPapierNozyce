document.addEventListener("DOMContentLoaded", function() {
    let dayNight = document.createElement("div")
    dayNight.innerHTML=`
        <div id="day-night">
            <div id="day"></div>
            <button id="shift">
                <div id="ball"></div>
            </button>
            <div id="night"></div>
        </div>
        `;
    document.body.appendChild(dayNight)

    let btn = document.getElementById("shift")
    btn.addEventListener("click", switchDayNight)
})


document.addEventListener("DOMContentLoaded", function() {
    const image = new Image();
    image.src = "day_night/sun2.png";
    const image2 = new Image();
    image2.src = "day_night/moon2.png"})

const dayTime={
    day: 'url("day_night/sun.png")',
    day2: 'url("day_night/sun2.png")',
    night: 'url("day_night/moon.png")',
    night2: 'url("day_night/moon2.png")',
    filter:  'drop-shadow(0 0 0.3vw yellow)',
    filter2: 'none'
}

function switchDayNight(){
    let day = document.getElementById("day")
    let night = document.getElementById("night")
    let backDiv = document.getElementById("day-night")
    let ball = document.getElementById("ball")

    if (day.style.backgroundImage == dayTime.day2){
        day.style.backgroundImage = dayTime.day
        night.style.backgroundImage = dayTime.night

        day.style.filter = dayTime.filter
        night.style.filter = dayTime.filter2

        ball.style.animation= "movie2 0.5s ease forwards"

        document.body.style.backgroundColor = "gray"
    }
    else{
        day.style.backgroundImage = dayTime.day2
        night.style.backgroundImage = dayTime.night2  
        day.style.filter = dayTime.filter2
        night.style.filter = dayTime.filter

        ball.style.animation= "movie 0.5s ease forwards"

        document.body.style.backgroundColor = "black"
    }

}