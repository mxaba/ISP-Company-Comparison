const userDataDisplay = document.querySelector(".userData");
// const searchBar = document.querySelector(".searchBar");
const ISPdataElement = document.querySelector(".ISPdata").innerHTML;
const ISPdataTemplate = Handlebars.compile(ISPdataElement);

const instanceFun = ISPFunction();

// userDataDisplay.innerHTML = ISPdataTemplate({ company : instanceFun.getCompanyData() })

var data = instanceFun.getCompanyData()

function printCompnanies(data){
    data.forEach(element =>{
        userDataDisplay.innerHTML += `
        <tr>
              <td>${element.companyName}</td>
              <td>${element.speed}</td>
              <td>${element.price}</td>
              <td>${element.coverage}</td>
              <td>${element.date}</td>
              <td>${element.users}</td>
              <td>${element.instructions}</td>
              <td>${element.area}</td>
            </tr>
        `
    })
}

printCompnanies(data)
