//E7 yle beraber gelmiş promisler daha efektif kullnaılır

// async function test(data){ // async anahtar keliimesi fonk un mutlaka promise döneceğini söyler
//     return data;


//     // await bir promisin resolve etmesini bekler
// }

// console.log(test("merhaba"));





// async function test(data){
//     let promise = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(typeof data === "string"){
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("string giriniz"));
//             }
//         },4000);
//     })
    
//     const response = await promise;
//     return response;

// }

// test(56).then(data => console.log(data))
// .catch(err => console.log(err));

async function test(url){
    const response = await fetch(url); // response objesi

    const data = (await response).json();  // json objesi

    console.log(data);

}

test("https://v6.exchangerate-api.com/v6/aeb65835c265f31d3d260379/latest/USD");
