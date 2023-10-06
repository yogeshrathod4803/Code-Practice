const currentDate = new Date();

// Get the current time components (hours, minutes, seconds)
const currentHours = currentDate.toLocaleTimeString();
const currentMinutes = currentDate.getMinutes();
const currentSeconds = currentDate.getSeconds();

// Create a formatted time string
const currentTime = `${currentHours}:${currentMinutes}:${currentSeconds}`;

console.log(currentHours);
