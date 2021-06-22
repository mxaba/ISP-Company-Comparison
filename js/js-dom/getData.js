const userDataDisplay = document.querySelector(".userData");
const search = document.getElementById("search");
const ISPdataElement = document.querySelector(".ISPdata").innerHTML;
const ISPdataTemplate = Handlebars.compile(ISPdataElement);

const instanceFun = ISPFunction();

// userDataDisplay.innerHTML = ISPdataTemplate({ company : instanceFun.getCompanyData() })

var data = instanceFun.getCompanyData()

function printCompnanies(data){
    userDataDisplay.innerHTML = ISPdataTemplate({ company : data })
}

printCompnanies(data)

function searchDetails(){
    var results = instanceFun.filterFunction(search.value)
    printCompnanies(results)
    // printCompnanies(results)
}

search.addEventListener('keyup', searchDetails)
