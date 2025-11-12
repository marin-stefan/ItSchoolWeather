// ne selectam tagul de html care contine orasul curent si impreuna cu cheia
// din local storage o sa setam ce folosim
const currentCityTag = document.querySelector('.current-city');
let currentCityFromLocalStorage = localStorage.getItem('city');

//daca nu avem nimic in cheia city in locastorage  atunci salvam ca default Bucuresti
if (!currentCityFromLocalStorage) {
    localStorage.setItem('city', 'București');
    currentCityFromLocalStorage = 'București'
};

//actualizam pe ecran numele orasului
currentCityTag.innerHTML = currentCityFromLocalStorage;

// Afisam vremea curenta pentru Bucuresti
displayCurrentWeather(currentCityFromLocalStorage);

// afisam vremea pe urm 5 zile
displayWeatherForecast(currentCityFromLocalStorage);