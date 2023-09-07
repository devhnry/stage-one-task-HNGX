const dayNames = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

const updateUTCTime = () => {
  const utcTimeEl = document.querySelector('[data-testid="currentUTCTime"]');
  const currentDate = new Date();
  const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second : '2-digit',  hour12: true }).toUpperCase();
  utcTimeEl.textContent = `Current UTC TIME  :  ${formattedTime}`
};

const updateDayOfTheWeek = () => {
  const day = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  const currentDate = new Date();
  const curDay = currentDate.toString().slice(0, 3);
  day.textContent = `Day of the WEEK: ${dayNames[curDay]}`;
};

updateUTCTime();
updateDayOfTheWeek();
setInterval(updateUTCTime, 1000);
setInterval(updateDayOfTheWeek, 60000);