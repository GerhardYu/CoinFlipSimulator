var cointOutcome = ["Head", "Tail"];
var result = [0, 0];
var bar_colours = ["red", "blue"];


function coinFlip(){

    let x = Math.floor(Math.random() * 2);

    let table = document.getElementById("chart");
    let row = table.insertRow();

    let valueCell = row.insertCell();
    if(x == 0){
        result[x]++;
    }
    else{
        result[x]++;
    }
    row.innerHTML = cointOutcome[x];
}

function graph(){
    new Chart("myChart", {
        type: "bar",
        data: {
            labels: cointOutcome,
            datasets: [{
                backgroundColor: bar_colours,
                data: result
            }]
        },
        options: {
            title:{
                display:true,
                text: "Coin Count"
            },
            legend:{
                display:false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}