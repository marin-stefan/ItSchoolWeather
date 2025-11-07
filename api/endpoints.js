
// Definim endpoint-urile catre server:
// Pentru endpoint de vreme curenta trebuie sa inseram dinamic parametrul city - ne definim in functie un parametru
function getCurrentWeatherEndpoint(city) {
	// API-ul de la Open Weather are nevoie de urmatorii query params:
	// city
	// lang - noi o sa trimitem ro
	// units - metric, pentru a primit rezultatele in grade Celsius
	// am mutat API_KEY intr-un fisier separat care este adaugat in .gitignore pentru a nu fi urcat si sharre-uit pe GIT
	return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecatEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`
}
