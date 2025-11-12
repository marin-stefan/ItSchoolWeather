// Ne definim 2 functii utilitare care o sa ne extraga dintr-o data in format utc ziua si ora
function getDayOfTheWeek (dateInUtcFormat) {
    // Pentru a putea crea o data pornind de la o valoare in UTC este nevoie sa o inmultim cu 1000
    const date = new Date(dateInUtcFormat * 1000);

    // Extragem ziua saptamanii sub dorma de index
    const dayIndex = date.getDay();
    
    // Pentru a mapa indexul zilei folosim un array cu zilele si ne folosim de indexul fiecarei zile
    const days = ['Duminică', "Luni", 'Marți', 'Miercuri', "Joi", "Vineri", "Sâmbătă"];

    if (days[dayIndex]) {
        return days[dayIndex];
    } else {
        throw new Error('Indexul trebuie sa fie intre 0 si 6');
    }
}

function getHour(dateInUtcFormat) {
    const date = new Date(dateInUtcFormat * 1000);

    // extragem ora
    let hour = date.getHours();
    
    // Daca ora are o valoare mai mica de 10 - ii adaugam un 0
    if (hour < 10) {
        hour = `0${ hour }`;
    };

    // Extragem minutele, si la fel daca valoarea e mai mica de 10 - ii adaugam un 0
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${ minutes }`;
    };

    // Returnam ora sub formatul dorit
    return `${ hour }:${ minutes }`;
}