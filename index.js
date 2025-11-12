// ne selectam tagul de html care contine orasul curent si impreuna cu cheia
// din local storage o sa setam ce folosim
const currentCityTag = document.querySelector(".current-city");
let currentCityFromLocalStorage = localStorage.getItem("city");

// selectam icon de scroll to top
const scrollToTopIcon = document.querySelector(".scroll-to-top");

//daca nu avem nimic in cheia city in locastorage  atunci salvam ca default Bucuresti
if (!currentCityFromLocalStorage) {
    localStorage.setItem("city", "București");
    currentCityFromLocalStorage = "București";
}

//actualizam pe ecran numele orasului
currentCityTag.innerHTML = currentCityFromLocalStorage;

// Afisam vremea curenta pentru Bucuresti
displayCurrentWeather(currentCityFromLocalStorage);

// afisam vremea pe urm 5 zile
displayWeatherForecast(currentCityFromLocalStorage);

// adaugam eventListener de click pe icon de scroll to top
scrollToTopIcon.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// adaugam eventListener pe document pt a ascunde/arata butonul de scroll to top 
document.addEventListener("scroll", () => {
    // aratam icon de scroll cand scrollul este mai mare de jumatatea viewPortului
    // viewport-ul difera in functie de rzolutia actuala a user-ului
    scrollToTopIcon.style.visibility = window.scrollY > window.innerHeight / 2 
        ? "visible"
        : "hidden"
});