const userDataDisplay = document.querySelector(".userData");
const ISPdataElement = document.querySelector(".ISPdata").innerHTML;
const ISPdataTemplate = Handlebars.compile(ISPdataElement);

const instanceFun = ISPFunction();

userDataDisplay.innerHTML = ISPdataTemplate({ company : instanceFun.getCompanyData() })
