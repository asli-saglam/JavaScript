// const merhaba = function(){
//     console.log("merhaba");
// }


//arrow(ok) function ile yazılmış hali

const merhaba = () => {
    console.log("merhaba");
}

merhaba();

const selam = (isim, surname)  => { // fonksiyon tek parametre alıyorsa parantez koymaya gerek yok
    console.log("selam", isim , surname); // ve bir tane işlevi varsa {} 'a gerek yok 
}
//const selam = isim => console.log("selam ", isim);     şeklinde

selam("asli", "saglam");