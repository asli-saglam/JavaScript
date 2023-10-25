// http status
// 200:OK
// 403:Forbidden
// 404: Not Found
// 505: Internal Server Error

document.getElementById("btn").addEventListener("click",function(){

    // Holds the status of the XMLHttpRequest.
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

     //XMLHttpRequest
    const xhr = new XMLHttpRequest()


    // xhr.onreadystatechange = function(){
    //     if(this.status == 200 & this.readyState == 4){
    //         //response hazır
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById("ajax").textContent = this.responseText;
        }
    }

    //bağlantımızı açıyoruz
    xhr.open("GET", "1.a.txt",true); // true değer asenkron olması

    xhr.send();
});