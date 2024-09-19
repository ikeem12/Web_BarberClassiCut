export const sectionAppoinment = `
    <header class="header_appoinment">
        <div class="container_title_header_appoinment">
            <h3>Appointments</h3>
            <p>View and manage employee appoinments</p>
        </div>
        <div>
            <ul>
                <li>Cristian</li>
                <li>Rubiel</li>
                <li>Bryan</li>
            </ul> 
        </div>  
    </header>
    <div class="body_appoinment">
        <div class="calendar">
            <div class="header">
                <button type="button" class="button_calendar" onclick="prevMonth()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                    </svg> 
                </button>
                <h2 id="monthYear"></h2>
                <button type="button" class="button_calendar" onclick="nextMonth()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
            </div>
            <div class="days" id="days"></div>
        </div>
        <div class="viewAppointment">
            <h3 id="appoinmentDate"></h3>
            <table>
                <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Service</th>
                      <th>Time</th>
                      <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Johan</td>
                        <td>Haircut</td>
                        <td>9:00</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                    </tr>
                        <td>johan</td>
                        <td>haircut</td>
                        <td>9:00</td>
                        <td>Realized</td>
                    </tr>
                    </tr>
                        <td>johan</td>
                        <td>haircut</td>
                        <td>9:00</td>
                        <td>Realized</td>
                    </tr>
                    </tr>
                        <td>johan</td>
                        <td>haircut</td>
                        <td>9:00</td>
                        <td>Realized</td>
                    </tr>
                     </tr>
                        <td>johan</td>
                        <td>haircut</td>
                        <td>9:00</td>
                        <td>Realized</td>
                    </tr>
                     </tr>
                        <td>johan</td>
                        <td>haircut</td>
                        <td>9:00</td>
                        <td>Realized</td>
                    </tr> </tr>
                        <td>johan</td>
                        <td>haircut</td>
                        <td>9:00</td>
                        <td>Realized</td>
                    </tr>
                </tbody>
            </table>
        </div> 
    </div>
`