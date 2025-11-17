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
                    <div class="pb-4 pt-4 mb-3 pr-3 rounded border d-flex align-items-center justify-content-between forecast-day">
                        <h3 class="text-primary mb-0">${ key }</h3>
                        <span class="material-symbols-outlined acc-header mr-5 fs-3 rounded" id="${ key }">
                            expand_all
                        </span>
                    </div>
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
                    const weatherIcon = getWeatherIcon(weather[0].icon);
                    
                    // afisam datele pe ecran
                    weatherForecastContainer.innerHTML += `
                        <div class="weather-forecast-box d-flex w-100 justify-content-between align-items-center border rounded p-3 mb-3 acc-content-${ key } d-none">
                            <div>${ hour }</div>
                            <div class="forecast-item-description">${ weatherDescription }</div>
                            <div><img src="${ weatherIcon }" alt="weather Icon" /></div>
                            <div class="fs-3"><strong> ${ temperature }°C</strong></div>
                            <div class="forecast-real-feel">Real feel: <strong>${ realFeel }°C</strong></div>
                        </div>
                    `;
                })
            }

            //selectam tagurile necesare
            const headers = document.querySelectorAll(".acc-header");
            const todayHeader = headers[0]; 

            // afisam optiunile pentru prima zi si modificam si iconita
            document.querySelectorAll(`.acc-content-${ todayHeader.id }`)
                .forEach((forecastElement) => forecastElement.classList.remove("d-none"));
            todayHeader.innerHTML = "collapse_all";

            headers.forEach(header => {
                header.addEventListener("click", () => {
                    // schimbam iconita in functie de detalii daca sunt deschise sau inchise
                    header.innerHTML = header.innerHTML === "collapse_all" ? "expand_all" : "collapse_all"

                    // la click pe una din zile se afiseaza detaliile si se ascund toate celelate zile
                    document.querySelectorAll(`.acc-content-${ header.id }`)
                        .forEach((forecastElement) => forecastElement.classList.toggle("d-none"));
                });
            });

        });
}