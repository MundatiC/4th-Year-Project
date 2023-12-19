const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

const submitButton = document.getElementById("submit");

const feedbackText = document.getElementById("feedback");

const digitalHoursInput = document.getElementById("hours");
const digitalMinutesInput = document.getElementById("minutes");
const digitalSecondsInput = document.getElementById("seconds");

let isDraggingHour = false;
let isDraggingMinute = false;
let isDraggingSecond = false;

// Sample quiz data
const quizData = [
    { hours: 9, minutes: 15 },
    { hours: 10, minutes: 20 },
    // Add more quiz data as needed
];

let currentQuestionIndex = -1;



function calculateAngle(x, y, centerX, centerY) {
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);

    // Ensure the angle is between 0 and 360 degrees
    return angle >= 0 ? angle : 360 + angle;
}


function runTheClock() {
    const clockCenterX = window.innerWidth / 2;
    const clockCenterY = window.innerHeight / 2;

    let hrPosition = (digitalHoursInput.value % 12) * 360 / 12;
    let minPosition = digitalMinutesInput.value * 360 / 60;
    let secPosition = digitalSecondsInput.value * 360 / 60;

   

    HOURHAND.style.transform = `rotate(${hrPosition}deg)`;
    MINUTEHAND.style.transform = `rotate(${minPosition}deg)`;
    SECONDHAND.style.transform = `rotate(${secPosition}deg)`;

    updateDigitalClock();
}


function handleMouseDownHour(e) {
    isDraggingHour = true;
    document.addEventListener("mousemove", handleMouseMoveHour);
    document.addEventListener("mouseup", handleMouseUpHour);
    e.preventDefault();
}

function handleMouseMoveHour(e) {
    if (isDraggingHour) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const angle = calculateAngle(mouseX, mouseY, centerX, centerY);

        digitalHoursInput.value = Math.abs(Math.round(angle / (360 / 12)));
        runTheClock();
    }
}

function handleMouseUpHour() {
    isDraggingHour = false;
    document.removeEventListener("mousemove", handleMouseMoveHour);
    document.removeEventListener("mouseup", handleMouseUpHour);
}

function handleMouseDownMinute(e) {
    isDraggingMinute = true;
    document.addEventListener("mousemove", handleMouseMoveMinute);
    document.addEventListener("mouseup", handleMouseUpMinute);
    e.preventDefault();
}

function handleMouseMoveMinute(e) {
    if (isDraggingMinute) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const angle = calculateAngle(mouseX, mouseY, centerX, centerY);

        digitalMinutesInput.value = Math.abs(Math.round(angle / (360 / 60)));
        runTheClock();
    }
}

function handleMouseUpMinute() {
    isDraggingMinute = false;
    document.removeEventListener("mousemove", handleMouseMoveMinute);
    document.removeEventListener("mouseup", handleMouseUpMinute);
}

function handleMouseDownSecond(e) {
    isDraggingSecond = true;
    document.addEventListener("mousemove", handleMouseMoveSecond);
    document.addEventListener("mouseup", handleMouseUpSecond);
    e.preventDefault();
}

function handleMouseMoveSecond(e) {
    if (isDraggingSecond) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const angle = calculateAngle(mouseX, mouseY, centerX, centerY);

        digitalSecondsInput.value = Math.abs(Math.round(angle / (360 / 60)));
        runTheClock();
    }
}

function handleMouseUpSecond() {
    isDraggingSecond = false;
    document.removeEventListener("mousemove", handleMouseMoveSecond);
    document.removeEventListener("mouseup", handleMouseUpSecond);
}

function getNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        const question = quizData[currentQuestionIndex];
        setAnalogClockValues(question.hours, question.minutes, 0);
        feedbackText.textContent = "";
    } else {
        // Quiz completed
        feedbackText.textContent = "Quiz completed!";
        submitButton.disabled = true;
    }
}

function setAnalogClockValues(hours, minutes, seconds) {
   


		const clockCenterX = window.innerWidth / 2;
		const clockCenterY = window.innerHeight / 2;
	
		let hrPosition = (hours % 12) * 360 / 12;
		let minPosition = minutes * 360 / 60;
		let secPosition = seconds * 360 / 60;
	
	   
	
		HOURHAND.style.transform = `rotate(${hrPosition}deg)`;
		MINUTEHAND.style.transform = `rotate(${minPosition}deg)`;
		SECONDHAND.style.transform = `rotate(${secPosition}deg)`;
	
		
}

submitButton.addEventListener("click", function () {
    const question = quizData[currentQuestionIndex];
    const userHours = parseInt(digitalHoursInput.value);
    const userMinutes = parseInt(digitalMinutesInput.value);

    if (userHours === question.hours && userMinutes === question.minutes) {
        feedbackText.textContent = "Correct!";
		getNextQuestion();
    } else {
        feedbackText.textContent = "Incorrect. Try again.";
    }
});

HOURHAND.addEventListener("mousedown", handleMouseDownHour);
MINUTEHAND.addEventListener("mousedown", handleMouseDownMinute);
SECONDHAND.addEventListener("mousedown", handleMouseDownSecond);

// Initialize the quiz
getNextQuestion();
