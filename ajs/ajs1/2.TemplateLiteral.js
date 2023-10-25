const name1 = "Asli";
const departmant = "Bilişim";
const salary = 20000;

const a = `Isim:${name1}\nDepartman:${departmant}\nMaaş:${salary}`;
console.log(a);


const html = `
    <ul>
        <li>${name1}</li>
        <li>${departmant}</li>
        <li>${salary}</li>
        <li>${10/4}</li>
    </ul>
    `;

    document.body.innerHTML = html