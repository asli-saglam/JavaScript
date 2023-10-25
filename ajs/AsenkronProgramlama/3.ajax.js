document.getElementById("change").addEventListener("click",change);

function change(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://v6.exchangerate-api.com/v6/aeb65835c265f31d3d260379/latest/USD");

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);

            const rate = response.conversion_rates.TRY
            const amount = Number(document.getElementById("amount").value);
            document.getElementById("tl").value = amount * rate;
            console.log(amount*rate);

        }
    }

    xhr.send();
}