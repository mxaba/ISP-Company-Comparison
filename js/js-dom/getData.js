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

if (localStorage['graph']) {
    arrayGraph = JSON.parse(localStorage.getItem("graph"));
} else {
    // eslint-disable-next-line no-undef
    arrayGraph = dataCal();
}

instanceFun.setDataCapured(arrayGraph)

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
    }
}

function showGrapth() {
2
    var xValues = ['Morning', 'Afternoon', 'Evening',];
    var xValuesMbps = ['Slow', 'Fast', 'Normal', 'Super Fast'];
    let seachGra = document.getElementById('seachGra').value
    // console.log(instanceFun.filterFunction(seachGra))
    // console.log(instanceFun.getDataCapured())
    if (seachGra == "") {
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
    } else if(instanceFun.filterGraphFunction(seachGra).length != 0) {
        instanceFun.setValueOfPie(seachGra)
        var shift = instanceFun.filterPieFunction()

        for(var i=0; i<shift.length; i++){

        }
        
        // console.log(shift.pop())
        // var reducedData =  Object.keys(shift).reduce((arr, key)=>{
        //     const subObj = {[key]: shift[key]};
        //     return arr.concat(subObj)
        // }, []);

        var myData = Object.keys(shift).map(key => {
            return shift[key];
        })
        // console.log(myData)

        var arrayEmp = []

        arrayGraph.push({
            label: myData[0],
            data: myData[1],
            backgroundColor: myData[2],
            hoverOffset: 10
        })
        console.log(arrayEmp)

        new Chart("myChart", {
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
                    text: 'This is the speed for ' + seachGra.toUpperCase() + ' at different times of the day'
                }
            }
        });
    }

    document.getElementById('seachGra').value = ''

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
