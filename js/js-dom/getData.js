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

console.log(instanceFun.sortData())

function searchDetails() {
    var results = instanceFun.filterFunction(search.value)
    printCompnanies(results)
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

    var xValues = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    new Chart("myChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: instanceFun.sortData()
        },
        options: {
            legend: { display: true }
        }
    });

}

showGrapth()


search.addEventListener('keyup', searchDetails)
