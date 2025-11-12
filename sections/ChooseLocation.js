// Selectam butoanele din dropdown-ul cu orase
const bucharestButton = document.querySelector(".dropdown-item.bucharest");
const timisoaraButton = document.querySelector(".dropdown-item.timisoara");
const oradeaButton = document.querySelector(".dropdown-item.oradea");

// definim o functie care sane schimbe orasul curent afisat epe ecran
function updateCurrentCityName(city) {
    //selectam tagul pt oras
    const currentCity = document.querySelector(".current-city");
    currentCity.innerHTML = `${ city }.`;
}

function updateWeather(city) {
    // salvam in localstorgae optiunea aleasa
    localStorage.setItem("city", city);
    //afisam vremea curenta
    displayCurrentWeather(city);
    // apelam functia care ne schimba orasul curent de pe ecran
    updateCurrentCityName(city);
    //reafisam si prognoza pentru urmatoarele 5 zile
    displayWeatherForecast(city);
}

// Adaugam event linstere pe butoane pentru a schimba datele despre vreme
bucharestButton.addEventListener("click", () => {
    updateWeather("București");
});

timisoaraButton.addEventListener("click", () => {
    updateWeather("Timișoara");
});

oradeaButton.addEventListener("click", () => {
    updateWeather("Oradea");
});