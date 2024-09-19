/**
 * Handles the login process by validating the username and password inputs.
 * Updates the feedback messages based on the validation results.
 * this function is part of the login
*/

//import the validateLoginData function
import { validateLoginData } from "./validateLoginDate.js";

function handleLogin() {

    // Get the input elements and feedback elements from the DOM
    const usernameInput = document.getElementById('userName');
    const passwordInput = document.getElementById('password');
    const feedBackUserName = document.getElementById('feedbackUserName');
    const feedBackPassword = document.getElementById('feedbackPassword');
    const advertCircles = document.querySelectorAll('.bi-exclamation-circle')

    // Get the values of the username and password inputs
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Validate the username and password
    const validationResult = validateLoginData(username, password);

    if (validationResult.isValid) {
        //submit
    } else {
        // Clear previous feedback messages
        feedBackUserName.textContent = "";
        feedBackPassword.textContent = "";

        advertCircles.forEach(advertCircle => {
            advertCircle.style.display = "none";
            
        });

        // Iterate through the validation errors and update the feedback messages
        validationResult.errors.forEach(error => {
            if (error.field === "username") {          
                feedBackUserName.textContent = error.error === "emptyField" 
                    ? "Username is empty." 
                    : "Username contains characters not allowed.";
                 // Display the advert circle for username
                advertCircles.forEach(advertCircle => {
                    if (advertCircle.dataset.field === "username") {
                        advertCircle.style.display = "block";
                    }
                });
            } else if (error.field === "password") {
                feedBackPassword.textContent = error.error === "emptyField" 
                    ? "Password is empty." 
                    : "Password contains characters not allowed.";
                // Display the advert circle for password
                advertCircles.forEach(advertCircle => {
                    if (advertCircle.dataset.field === "password") {
                        advertCircle.style.display = "block";
                    }
                });
            }
        });

        // Iterate through the validation errors and update the feedback messages
        if (validationResult.errors.some(error => error.error === "emptyFields")) {
            feedBackUserName.textContent = "Username is empty.";
            feedBackPassword.textContent = "Password is empty.";

            // Display all advert circles for empty fields
            advertCircles.forEach(advertCircle => {
                advertCircle.style.display = "block";
            });
        }
    }

}

// Expose the handleLogin function to the global scope
window.handleLogin = handleLogin;



//import the calendar function and prevmonth, nextmonth function
import { Calendar, prevMonth, nextMonth } from "./calendar.js";
// the calendar element is accessed
const calendar = document.querySelector('.calendar')

// Checks if the calendar element exists in the dom
if(calendar){

    // the prevMonth and nextMonth functions are assigned to the window object so that they are available globally
    window.prevMonth = prevMonth;
    window.nextMonth = nextMonth;
    // the calendar function is called
    Calendar()

}



/**
 * Function to highlight appointment links in the administration dashboard.
 * Selects all elements with class 'appoinmentsLink' and adds class 'active' to them.
 */

function highlightAppointmentsLink() {
    const appoinmentsLink = document.querySelectorAll('.appoinmentsLink');
    appoinmentsLink.forEach(link => link.classList.add('active'))
}

// Call to the function to highlight appoinments links when loading the page.
highlightAppointmentsLink()



/**
 * Function to reload the content of a specific section in the admin dashboard.
 * @param {string} section - The section to be displayed ('appoinments', 'revenues', 'settings').
 * @param {HTMLElement} element - The element that has been clicked to activate the section.
*/

import { sectionAppoinment } from "./templatesDinamics.js";

function reloadContent(section, element){
    const dashboard_content = document.getElementById('dashboard_content')

    const links = document.querySelectorAll('.container_links_nav_dashboard li');

    // Select all dashboard navigation links and remove the 'active' class.
    links.forEach(link => link.classList.remove('active'));

    // Cleans the dashboard contents.
    dashboard_content.innerHTML = ''

    // Depending on the section, add specific content to the dashboard.
    switch (section){
        case 'appoinments':
            element.classList.add('active');
            dashboard_content.innerHTML = sectionAppoinment
            // the calendar function is called
            Calendar()
            break
        case 'revenues':
            // The active class is added
            element.classList.add('active');
            dashboard_content.innerHTML = `sdfsdfsdfdsfdsf`
            break
        case 'settings':
            // The active class is added
            element.classList.add('active');
            dashboard_content.innerHTML = `sdfdsfsdfsddsf`
            break
    }
}

// Expose the reloadContent function to the global scope
window.reloadContent = reloadContent;