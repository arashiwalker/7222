// Customizable time intervals (in milliseconds)
const hoursInterval = 1000 * 72/22 * 22 * 50; // 1 hour
const minutesInterval = 1000 * 72/22 * 22; // 1 minute
const secondsInterval = 1000 * 72/22; // 1 second

// Function to update the clock
function updateClock() {
  const now = new Date(); // Get current date and time
  const currentTime = now.getTime(); // Get current time in milliseconds since epoch

  // Calculate hours, minutes, and seconds based on customizable intervals
  const hours = Math.floor(currentTime / hoursInterval) % 24;
  const minutes = Math.floor(currentTime / minutesInterval) % 50;
  const seconds = Math.floor(currentTime / secondsInterval) % 22;

  // Convert hours, minutes, and seconds to two-digit format
  const hoursString = String(hours).padStart(2, "0");
  const minutesString = String(minutes).padStart(2, "0");
  const secondsString = String(seconds).padStart(2, "0");

  // Update the clock display
  document.getElementById("hours").textContent = hoursString;
  document.getElementById("minutes").textContent = minutesString;
  document.getElementById("seconds").textContent = secondsString;
}

// Call the updateClock function every second
setInterval(updateClock, secondsInterval);
