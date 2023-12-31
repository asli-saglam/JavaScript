document.getElementById("ajax").addEventListener("click", getAllEmployees);

function getAllEmployees(){

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "2.employees.json", true); // asenkron veri alma

    xhr.onload = function(){
        let list = document.getElementById("employees");

        if(this.status === 200){
            const employees = JSON.parse(this.responseText);

            employees.forEach(function(employee){
                list.innerHTML += `
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                `;
            });
        }
    }

    xhr.send();

}