class Request{
    async get(url){//get request
    // return new Promise((resolve, reject)=>{
    //     fetch(url).then(response => response.json())
    //     .then(data => resolve(data))
    //     .catch(err =>reject(err));
    // })

    const response = await fetch(url); // response objesi
    const data = await response.json() // json objesi

    return data;

    }

    async post(url,data){
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const data2 = await response.json();

        return data2;
    }

    async put(url,data){
        const response = await fetch(url,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const data3 = await response.json();

        return data3;
        }

    async delete(url){
        const response = await fetch("https://jsonplaceholder.typicode.com/albums/1",{
            method: 'DELETE'
        }); // response objesi
        return "veri silme işlemi başarılı"; 
        
        }
}

const request = new Request();

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(err => console.log(err));

