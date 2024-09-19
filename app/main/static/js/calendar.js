// Names of the months and days of the week
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let currentDate = new Date();

// Main function to render the calendar
export function Calendar() {
  const daysContainer = document.getElementById('days');
  const monthYear = document.getElementById('monthYear');
  // Clean the day container
  daysContainer.innerHTML = '';
  const appoinmentDate = document.getElementById('appoinmentDate')
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  // first day of the month
  const firstDay = new Date(year, month, 1).getDay();
  // last day of the month
  const lastDate = new Date(year, month + 1, 0).getDate();
  // last day of the previous month
  const prevLastDate = new Date(year, month, 0).getDate();

  monthYear.textContent = `${monthNames[month]} ${year}`;
  appoinmentDate.textContent = `Appoiments for ${day}/${month + 1}/${year}`

  // Renders days of the week and days of the month
  renderWeekdays(daysContainer);
  renderDays(daysContainer, firstDay, prevLastDate, lastDate, year, month);
}

// Function for rendering the days of the week
function renderWeekdays(container) {

  dayNames.forEach(day => {
    const dayElement = document.createElement('div');
    dayElement.classList.add('weekday');
    dayElement.textContent = day;
    container.appendChild(dayElement);
  });

}

// Function to render the days of the month
function renderDays(container, firstDay, prevLastDate, lastDate, year, month) {

  // Days of the previous month
  for (let i = firstDay; i > 0; i--) {
    createDayElement(container, prevLastDate - i + 1, 'inactive');
  }

  // Days of the current month
  for (let day = 1; day <= lastDate; day++) {
    const dayElement = createDayElement(container, day);
    if (day === currentDate.getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
      dayElement.classList.add('today');
    }
    dayElement.onclick = () => handleDayClick(year, month, day);
  }

  // Days of next month
  const totalCells = firstDay + lastDate;
  const nextDays = 42 - totalCells;
  for (let i = 1; i <= nextDays; i++) {
    createDayElement(container, i, 'inactive');
  }

}
  
// Function to create a day element
function createDayElement(container, day, additionalClass = '') {
  const dayElement = document.createElement('div');
  dayElement.classList.add('day');
  if (additionalClass) dayElement.classList.add(additionalClass);
  dayElement.textContent = day;
  container.appendChild(dayElement);
  return dayElement;
}

// Function to go to the previous month
export function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  Calendar();
}

// Function to go to the nxt month
export function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  Calendar();
}




// function handleDayClick(year, month, day) {
//     const utcDate = new Date(Date.UTC(year, month, day));
//     fetch('/view_dates', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ date: utcDate.toISOString() })
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.success) {
//         updateAppointments(data.appointments,year,month,day);
//       } else {
//         alert('Error al actualizar las citas: ' + data.error);
//       }
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       alert('Error al actualizar las citas');
//     });
// }