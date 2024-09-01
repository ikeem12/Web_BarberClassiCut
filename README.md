Project Description:
This project consists of the development of a website for a barbershop, designed to facilitate the management of reservations and appointments for customers, employees, and the owner of the barbershop.

Main Functionalities
* Customer Reservations: Users or customers can make reservations by choosing the day, service, and barber of their preference.
  
* Employee Agenda: Employees have access to an agenda where they can view their reservations for the current day, as well as previous and
subsequent days. They can also change the status of appointments (made or cancelled) and add new appointments to manage customers arriving without a prior reservation.

* Administration Panel: The barbershop owner has an administration section where they can see the appointments of each of their employees and the status of these appointments. Additionally, they can view the day’s earnings, add or delete employees, and change their users and passwords.
Notifications in the Agenda: A system of notifications will be implemented within the agenda so that employees receive real-time alerts when new reservations are made or existing appointments are modified.

Project Objective:
The objective of this project is to create an efficient and easy-to-use tool that will improve the organization and management of appointments in a barbershop, benefiting customers, employees, and the business owner.

Application Architecture:
Three-Tier Architecture
This architecture divides the application into three main layers: presentation, business logic, and data.

Presentation Layer (Frontend):
Technologies: HTML, CSS, JavaScript
Function: This layer will take care of the user interface and customer interaction. This is where users will make reservations, employees will manage their schedules, and the administrator will oversee operations.

Business Logic Layer (Backend):
Technologies: Flask (Python)
Function: This layer will handle the application logic, business rules, and communication between the presentation layer and the data layer. This is where reservations will be processed, appointment statuses will be updated, and notifications will be managed.

Data Layer (Database):
Technologies: MySQL
Function: This layer will be responsible for data storage and management. This is where bookings, employee details, earnings, and other relevant data are stored.

RESTful API:
Technologies: Flask-RESTful to create APIs
Function: Create a RESTful API that will allow communication between the frontend and the backend. This will facilitate scalability and integration with other applications or services in the future.

Authentication and Authorization:
Technologies: Flask-Security, Flask-Login, Werkzeug.Security
Function: Implement an authentication and authorization system to ensure that only authorized users can access certain functionalities (for example, the administration panel).

Real-Time Notifications:
Technologies: Flask-SocketIO
Function: Implement real-time notifications to alert employees about new bookings or changes in appointments.

Why This Architecture?
* Modularity: The separation into layers facilitates the maintenance and scalability of the project. Each layer can be developed and updated independently.
* Scalability: The three-layer architecture allows each component to be scaled independently according to the needs of the project.
* Flexibility: Using a RESTful API facilitates integration with other applications and services in the future.
* Security: The implementation of authentication and authorization ensures that sensitive data is protected.
