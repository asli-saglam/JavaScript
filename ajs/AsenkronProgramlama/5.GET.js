//ajax ,callback, http Requestleri

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    //Get request
    get(url,callback){
        this.xhr.open("GET", url); //bağlantı açık

        this.xhr.onload = () =>{
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else{
                //hata
                callback("bir get hatası oluştu.",null);
            }
        }
        this.xhr.send();
    }

    //post request
    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json"); //json verisi

        this.xhr.onload = () => {
            if(this.xhr.status === 201){
                //başarılı
                callback(null, this.xhr.responseText);
            }
            else{
                callback("bir post hatası oluştu", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
        
    }

    //put request
    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json"); //json verisi

        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                //başarılı
                callback(null, this.xhr.responseText);
            }
            else{
                callback("bir put hatası  oluştu", null);
            }
        }

        this.xhr.send(JSON.stringify(data));
        
    }
    //delete request
    delete(url,callback){
        this.xhr.open("DELETE", url); //bağlantı açık

        this.xhr.onload = () =>{
            if(this.xhr.status === 200){
                callback(null,"veri silme işlemi başarılı");
            }
            else{
                //hata
                callback("bir delete hatası oluştu.",null);
            }
        }
        this.xhr.send();
    }
}

const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/posts",function(err,response){
//     if(err === null){
//         //başarılı
//         console.log(response);
//     }
//     else{
//         console.log(err);
//     }

// });

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Asli"},function(err,album){
//     if(err === null){
//         //başarılı
//         console.log(album);
//     }
//     else{
//         console.log(err);
//     }
// });

// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:143,title:"Asli"},function(err,album){
//     if(err === null){
//         //başarılı
//         console.log(album);
//     }
//     else{
//         console.log(err);
//     }
// });
request.delete("https://jsonplaceholder.typicode.com/posts/10",function(err,response){
    if(err === null){
        //başarılı
        console.log(response); // id si 10 olan objesi sildi 
    }
    else{
        console.log(err);
    }
});