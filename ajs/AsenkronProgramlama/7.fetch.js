//  ajax a alternetif olarak kullanılır

function getTextFile(){ // text dosyası
    fetch("7.example.txt")
    .then(response => response.text()).then(data => console.log(data))
    .catch(err => console.log(err));
}


function getJSonFile(){ //local bi Json Dosyasından veri alma
    fetch("2.employees.json") 
    .then(response => response.json())
    .then(data => console.log(data)).catch(err => console.error(err));
}

function getExternalAPI(){ //local bi Json Dosyasından veri alma
    fetch("https://v6.exchangerate-api.com/v6/aeb65835c265f31d3d260379/latest/USD") 
    .then(response => response.json())
    .then(data => {
        console.log(data.conversion_rates.TRY);
    })
    .catch(err => console.error(err));
}



// getTextFile();
// getJSonFile();
getExternalAPI();