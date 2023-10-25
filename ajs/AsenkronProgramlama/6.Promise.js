// function getData(data){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
            
//             if(typeof data === "string"){
//                 //olumlu
//                 resolve(data);
//             }
//             else{
//                 //olumsuz
//                 reject(new Error ("lütfen bir string değer giriniz"));
//             }
//         },2000);
//     })
// }

// getData(23).then(response => console.log("girilen değer" +response)).catch(err => console.error(err));

function addTwo(number){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number+2);
            }
    
            else{
                reject(new Error("Bir sayı giriniz"));
            }
        },2000);
    });
}

addTwo(true)
.then(response =>{
    console.log(response);
    return response + 2;
})
.then(response2 =>console.log(response2)).catch(err => console.error(err));

//birden çok then kullanılması chain yapısı  chainde sadece bir tane catch olabilir.