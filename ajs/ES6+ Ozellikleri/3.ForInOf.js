//For in objelerde stringlerde dizilerde vs

const ozellik = {
    isim : "asli",
    surname : "saglam",
    salary : 2000
};

for(let prop in ozellik){
    console.log(prop,ozellik[prop]);
}

const isim = "onur";
for(let index in isim){
    console.log(index,isim[index]);
}


const langs = ["java","c#","ruby"];
for(let index in langs){
    console.log(index,langs[index]);
}


//FOr of objelerde gezinemez

//array

for(let value of langs){
    console.log(value);
}
//string
for(let character of isim){
    console.log(character);
}



