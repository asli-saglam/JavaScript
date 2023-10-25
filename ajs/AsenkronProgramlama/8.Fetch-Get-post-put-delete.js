class Request{
    get(url){//get request
    return new Promise((resolve, reject)=>{
        fetch(url).then(response => response.json())
        .then(data => resolve(data))
        .catch(err =>reject(err));
    })
    }

    post(url,data){ // post request
        fetch(url,{   // new promisle yaparsak aşağıda çağırdığımız yerde sonucumuzu alabiliriz
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }).then(response => response.json())
          .then(data => console.log(data))
          .catch(err => console.log(err));
    }

    put(url,data){//put request
        fetch(url,{
          method: 'PUT',
          body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          },
      }).then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
    }

    delete(url){
      return new Promise((resolve,reject)=>{
        fetch("https://jsonplaceholder.typicode.com/albums/1",{
          method: 'DELETE'
        })
        .then(response => resolve("veri silme işlemi başarılı"))
        .catch(err => reject(err));
      })
    }
}

const request = new Request();

// let albums;
// request.get(},)
// .then(albums =>{
//     console.log(albums);
// })
// .catch(err => console.log(err));



// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1, tittle: "asli"});


// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId: 10, tittle: "aslis"}); //id si 1 olanın bilgileri değişti

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(err => console.log(err));
