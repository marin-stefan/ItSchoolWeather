// declaram functia pentru afisarea vremii pe urmatoarele 5 zile - apelul functiei
// se va face in alte fisiere

function displayWeatherForecast(city) {
    // generam link-ul catre openweather catre care facem call-ul
    const forecastEndpoint = getForecatEndpoint(city);

    // inainte de a face cererea catre server si sa afisam noile informatii ne selectam tag-ul de html ce va contine 
    // aceste info si stergem orice ar fi inauntru
    let weatherForecastContainer = document.querySelector('.weather-forecast');
    weatherForecastContainer.innerHTML = '';

    // facem call catre endpoint
    fetch(forecastEndpoint)
        .then((response) => response.json())
        .then((data) => {
            //din datele venite de la server ne intereseaza doar list
            const { list } = data;

            // ne definim un obiect in care sa grupam predictiile venite de la server pe zile
            const daysMap = {};

            // iteram prin predictiile venite de la server adica variabila list
            list.forEach((element) => {
                // extragem data predictiei pt a putea face gruparea pe zile
                const { dt } = element;

                // folosind utilitarul nostru parsam ziua curenta
                const day = getDayOfTheWeek(dt);

                //facem o verificare si daca deja avem ziua sapt in obiectam ii adaugam o noua predictie
                if (daysMap[day]) {
                    daysMap[day].push(element);
                } else {
                    //altfel daca nu avem cheia in obiect o inseram impreuna cu noua predictie
                    daysMap[day] = [element];
                }
            });

            // parcurgem cu forIn continutul obiectului daysMap
            // cheile din obiect sunt zilele saptamanii pt care avem proedictii

            for (key in daysMap) {
                // afisam ziua curenta pe ecran
                weatherForecastContainer.innerHTML += `
                    <h3 class="text-primary">${ key }</h3>
                `;

                // pentru fiecare zi a saptamanii extragem predictiile si iteram prin ele
                const days = daysMap[key];
                days.forEach((element) => {
                    //extragem datele de interes
                    const { dt, main, weather } = element;

                    // incepem sa parsam datele cu ajutorul utilitarelor functii create deja de noi in utils
                    const hour = getHour(dt);

                    // rotunjim valorile temperaturilor
                    const temperature = Math.round(main.temp);
                    const realFeel = Math.round(main.feels_like);

                    // pentru a obtine descrierea trebuie sa avem grija ca weather este un array cu un singur element
                    const weatherDescription = weather[0].description;

                    //parsam iconita
                    const weatherIcon = getWeatherIcon(weather[0].icon)
                    
                    // afisam datele pe ecran
                    weatherForecastContainer.innerHTML += `
                        <div class="weather-forecast-box d-flex w-100 justify-content-between align-items-center border rounded p-3 mb-3">
                            <div>${ hour }</div>
                            <div><img src="${ weatherIcon }" alt="" /></div>
                            <div class="fs-3"><strong>$ {temperature}°C</strong></div>
                            <div class="real-feel">Real feel: <strong>${ realFeel }°C</strong></div>
                        </div>
                    `;
                })
            }
        });
}