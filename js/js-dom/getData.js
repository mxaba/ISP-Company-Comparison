const userDataDisplay = document.querySelector(".userData");
const search = document.getElementById("search");
const ISPdataElement = document.querySelector(".ISPdata").innerHTML;
const ISPdataTemplate = Handlebars.compile(ISPdataElement);
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


const instanceFun = ISPFunction();

// userDataDisplay.innerHTML = ISPdataTemplate({ company : instanceFun.getCompanyData() })

var data = instanceFun.getCompanyData()

function printCompnanies(data) {
    userDataDisplay.innerHTML = ISPdataTemplate({ company: data })
}

printCompnanies(data)

function searchDetails() {
    var results = instanceFun.filterFunction(search.value)
    printCompnanies(results)
    // printCompnanies(results)
}

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function showGrapth() {

    var xValues = ['0%', '10%', '20%', '30%', '40%', '50%', '70%', '80%', '90%', '100%'];

    new Chart("myChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                labeal: "Name",
                data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
                borderColor: "red",
                fill: true
            }, {
                data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
                borderColor: "green",
                fill: true
            }, {
                data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
                borderColor: "blue",
                fill: true
            }]
        },
        options: {
            legend: { display: true }
        }
    });

}

showGrapth()


search.addEventListener('keyup', searchDetails)
