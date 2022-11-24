const body = document.querySelector('body');

function createWelcomeDiv(){
    const welcomeDiv = document.createElement('div');
    welcomeDiv.classList.add('welcome');
    welcomeDiv.classList.add('div-style');

    const welcomeHeading = document.createElement('h2');
    welcomeHeading.classList.add('welcome-heading');
    welcomeHeading.textContent = `Welcome to Grammy's Kitchen!`;

    const slogan = document.createElement('span');
    slogan.classList.add('welcome-slogan');
    slogan.textContent = `Home-cooked Comfort Food, just like Grandma used to make.`;

    const welcomeMenuButton = document.createElement('button');
    welcomeMenuButton.classList.add('welcome-menu-button');
    welcomeMenuButton.textContent = 'Check Out Our Menu!';

    welcomeDiv.append(welcomeHeading, slogan, welcomeMenuButton);

    return welcomeDiv;
}

function createHoursDiv(){
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('opening-hours');
    hoursDiv.classList.add('div-style');

    const hoursHeading = document.createElement('h3');
    hoursHeading.classList.add('hours-heading');
    hoursHeading.textContent = 'Opening Hours';

    const scheduleDiv = document.createElement('div');
    scheduleDiv.classList.add('schedule');

    const mondayDiv = document.createElement('div');
    mondayDiv.classList.add('hour-slot');
    const day1 = document.createElement('span');
    const time1 = document.createElement('span');
    day1.textContent = 'Monday';
    time1.textContent = 'Closed';
    mondayDiv.append(day1, time1);

    const weekDayDiv = document.createElement('div');
    weekDayDiv.classList.add('hour-slot');
    const day2 = document.createElement('span');
    const time2 = document.createElement('span');
    day2.textContent = 'Tuesday - Thursday';
    time2.textContent = '11:00am - 9:00pm';
    weekDayDiv.append(day2, time2);

    const saturdayDiv = document.createElement('div');
    saturdayDiv.classList.add('hour-slot');
    const day3 = document.createElement('span');
    const time3 = document.createElement('span');
    day3.textContent = 'Friday & Saturday';
    time3.textContent = '12:00pm - 12:00am';
    saturdayDiv.append(day3, time3);

    const sundayDiv = document.createElement('div');
    sundayDiv.classList.add('hour-slot');
    const day4 = document.createElement('span');
    const time4 = document.createElement('span');
    day4.textContent = 'Sunday';
    time4.textContent = '1:00pm - 9:00pm';
    sundayDiv.append(day4, time4);

    scheduleDiv.append(mondayDiv, weekDayDiv, saturdayDiv, sundayDiv);

    hoursDiv.append(hoursHeading, scheduleDiv);

    return hoursDiv;
}

export default function loadHomePage(contentElement){
    const welcomeDiv = createWelcomeDiv();
    const hoursDiv = createHoursDiv();
    contentElement.append(welcomeDiv, hoursDiv);
    body.append(contentElement);
}