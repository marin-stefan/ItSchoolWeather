ItSchool Weather - Project2 - Marin Ștefan Daniel - 2025

# 🌦️ Weather App

A simple and responsive Weather App built using JavaScript, HTML, and CSS.  
It displays the current weather and a 5-day forecast for a selected city, using real-time data from the OpenWeatherMap API.

---

## 🚀 Features

- Current weather and 5-day forecast display  
- The 5-day forecast is presented in an accordion-style menu  
  - The first day’s forecast is expanded by default  
  - Each day can be opened or closed individually using the expand/collapse icon  
- City selection via a dropdown menu with multiple predefined cities  
- Remembers your last selected city using Local Storage  
  - If no city is stored, București is used as the default  
- Automatic weather update when changing the city  
- Fetches data securely via HTTPS requests from the OpenWeatherMap API  
- Filters and displays relevant information (temperature, humidity, description, icons, etc.)  
- 🔝 Scroll-to-top functionality appears when the user scrolls down more than half of the page, allowing quick navigation back to the top  

---

## 🧠 How It Works

1. When the app loads, it checks Local Storage for a saved city.  
2. If found, it fetches and displays the weather for that city.  
3. If not, it defaults to București.  
4. The user can choose a different city from the dropdown.  
5. The new city is saved in Local Storage and its weather data is displayed.  
6. Data is fetched from OpenWeatherMap via two endpoints:  
   - Current weather data  
   - 5-day forecast data  
7. A scroll-to-top button becomes visible when the user scrolls past 50% of the page height and hides again when above that threshold.  

---

## 🧰 Technologies Used

- HTML5 – structure and layout  
- CSS3 – styling and responsive design  
- JavaScript (ES6+) – logic, data fetching, and DOM manipulation  
- OpenWeatherMap API – weather data source  

---

## ⚙️ Setup & Usage

1. Clone or download the project:  
   git clone https://github.com/marin-stefan/ItSchoolWeather.git

2. Open index.html in your browser.

3. The app will automatically fetch the weather for București or your previously selected city.

4. Use the city selector to change the city and see updated data instantly.

5. Scroll down the page — the scroll-to-top button will appear once you’ve passed halfway down.

---

## 🔑 API Information

- Weather data is fetched from https://openweathermap.org/api  
- You’ll need a free API key from OpenWeatherMap.  
- Insert your key into the JavaScript file where the fetch requests are made.

---

## 🌍 Live Demo

Check out the live version here:  
https://weather-app-demo.netlify.app  (temporary link — to be updated after deployment)

---

## 🏫 About

This project is part of the IT School Web Development Bootcamp and represents the first practical project of the program.  
It demonstrates basic API integration, DOM manipulation, and persistent data storage in the browser.

---

## 👨‍💻 Author

Marin Ștefan Daniel  
Email: stefann06@yahoo.com  
Live Demo: https://weather-app-demo.netlify.app
