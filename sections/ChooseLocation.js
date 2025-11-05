// Selectam butoanele din dropdown-ul cu orase
const bucharestButton = document.querySelector('.dropdown-item.bucharest');
const timisoaraButton = document.querySelector('.dropdown-item.timisoara');
const oradeaButton = document.querySelector('.dropdown-item.oradea');

// Adaugam event linstere pe butoane pentru a schimba datele despre vreme
bucharestButton.addEventListener('click', function(){
    console.log('clicked');
});

timisoaraButton.addEventListener('click', function(){
    console.log('timisoara clicked');
});


oradeaButton.addEventListener('click', function(){
    console.log('oradea clicked');
});
