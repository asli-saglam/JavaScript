// setler - kümeler    bir değeri sadece bir defa taşıyor

const myset = new Set();

myset.add(100);
myset.add(100); // hata vermez ama eklemez de
myset.add("asli");

console.log(myset);

//has metodu
console.log(myset.has("asli"));   //içinde asli var mı