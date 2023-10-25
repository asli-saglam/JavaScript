const from = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");

//UI objesini başlatma

const ui = new UI();

addEventListeners();

function addEventListeners(){
    from.addEventListener("submit", addFilm);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        //hata
        ui.displayMessages("Tüm alanları doldurunuz!!", "danger");

    }
    else{
        //yeni film

        const newFilm = new Film(title, director,url);
        ui.addFilmTOUI(newFilm); // arayüze film ekleme
        ui.clearInputs(titleElement,directorElement,urlElement);
    }




    e.preventDefault();
}