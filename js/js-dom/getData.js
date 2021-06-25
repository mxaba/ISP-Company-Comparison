const userDataDisplay = document.querySelector(".userData");
const addDataElement = document.querySelector(".addData");
const search = document.getElementById("search");
const ISPdataElement = document.querySelector(".ISPdata").innerHTML;
const ISPdataTemplate = Handlebars.compile(ISPdataElement);
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


const instanceFun = ISPFunction();

// userDataDisplay.innerHTML = ISPdataTemplate({ company : instanceFun.getCompanyData() })

let arrayGraph = []
let dataset = []

if (localStorage['graph']) {
    arrayGraph = JSON.parse(localStorage.getItem("graph"));
} else {
    // eslint-disable-next-line no-undef
    arrayGraph = dataCal();
}

if (localStorage['dataset']) {
    dataset = JSON.parse(localStorage.getItem("dataset"));
} else {
    // eslint-disable-next-line no-undef
    dataset = dataSet();
}

instanceFun.setDataCapured(arrayGraph)
instanceFun.setCompanyData(dataset)

var data = instanceFun.getCompanyData()

function printCompnanies(data) {
    userDataDisplay.innerHTML = ISPdataTemplate({ company: data })
}

printCompnanies(data)

// console.log(instanceFun.getDataCapured())

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
        location.reload()
    }
}

function showGrapth() {
    var xValues = ['Morning', 'Afternoon', 'Evening',];
    var xValuesMbps = ['Slow', 'Fast', 'Normal', 'Super Fast'];
    let seachGra = document.getElementById('seachGra').value
    let seachGraPla = document.getElementById('seachGraPla').value
    if (seachGra == "" && seachGraPla == "") {
        new Chart("myChart", {
            type: "line",
            data: {
                labels: xValues,
                datasets: instanceFun.graDataDisplay()
            },
            options: {
                legend: { display: true },
                responsive: true,
                title: {
                    display: true,
                    text: "On the y-axis it's speed per Mbps and x-axis it's the time of the day"
                }
            }
        });
    }
    console.log(seachGraPla)
    if(seachGra != "" && seachGraPla != "" && instanceFun.filterGraphFunction(seachGra, seachGraPla).length != 0) {
        instanceFun.setValueOfPie(seachGra, seachGraPla)
        var shift = instanceFun.filterPieFunction()
        new Chart("myChart1", {
            type: "pie",
            data: {
                labels: xValuesMbps,
                datasets: [shift.pop()]
            },
            options: {
                legend: { display: true },
                responsive: true,
                title: {
                    display: true,
                    text: 'This is the user feedback of ' + seachGra.toUpperCase() + ' @ ' + seachGraPla.toUpperCase() + ' at diferent times of the day'
                }
            }
        });
    }
    document.getElementById('seachGra').value = ""
    document.getElementById('seachGraPla').value = ""
}


search.addEventListener('keyup', searchDetails)

addDataElement.addEventListener('click', () => {
    const objectSet = {}
    const company = document.getElementById("company").value;
    const morning = document.getElementById("morning").value;
    const morningspeed = document.getElementById("morningspeed").value;
    const afternoon = document.getElementById("afternoon").value;
    const afternoonspeed = document.getElementById("afternoonspeed").value;
    const eveningspeed = document.getElementById("eveningspeed").value;
    const evening = document.getElementById("evening").value;
    const placeentered = document.getElementById("placeentered").value;

    if (company !== "" && morning !== "" && morningspeed !== "" && afternoon !== "" && afternoonspeed !== "" && eveningspeed !== "" && evening !== "" && placeentered !== "") {
        objectSet.companyName = company
        objectSet.morning = morning
        objectSet.afternoon = afternoon
        objectSet.morningspeed = parseInt(morningspeed)
        objectSet.afternoonspeed = parseInt(afternoonspeed)
        objectSet.eveningspeed = parseInt(eveningspeed)
        objectSet.evening = evening
        objectSet.placeentered = placeentered
        instanceFun.addDataFunction(objectSet)
        localStorage.setItem("graph", JSON.stringify(instanceFun.getDataCapured()));
        alert("Data captured Successful 🧑🏾‍💻Thank you🤝")
        location.reload()
    } else {
        alert("Please make sure all the fields are selected!")
    }
})
