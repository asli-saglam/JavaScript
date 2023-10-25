class UI{
    
static addFilmTOUI = function(newFilm){

    // <!-- <tr>
    //   <td><img src="" class="img-fluid img-thumbnail"></td>
    //   <td></td>
    // <td></td>
    //  <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    //  </tr> -->
    //   <!-- <tr>
    //  <td><img src="" class="img-fluid img-thumbnail"></td>
    //   <td></td>
    //   <td></td>
    //  <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    //   </tr> -->
    
    const filmList = document.getElementById("films");
    
    filmList.innerHTML += `
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
    `;
    }
    
    static clearInputs = function(el1, el2 ,el3){
        el1.value = "";
        el2.value = "";
        el3.value = "";
    }
    
    static displayMessages = function(message,type){
        const cardbody = document.querySelector(".card-body");
        // alert divini oluşturma
        const div = document.createElement("div");
    
        div.className = `alert alert-${type}`;
        div.textContent = message;
    
        cardbody.appendChild(div);
    
        setTimeout(function(){
            div.remove();
        },2000);
    }
}
