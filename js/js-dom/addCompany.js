const submit = document.querySelector('.submit')
const instanceFun = ISPFunction();

let dataset = []
if (localStorage['dataset']) {
    dataset = JSON.parse(localStorage.getItem("dataset"));
} else {
    // eslint-disable-next-line no-undef
    dataset = dataSet();
}

instanceFun.setCompanyData(dataset)

submit.addEventListener('click', () => {

    const cname = document.getElementById('Cname').value
    const speed = document.getElementById('speed').value
    const price = document.getElementById('price').value
    const coverage = document.getElementById('coverage').value
    const date = document.getElementById('date').value
    const users = document.getElementById('users').value
    const installation = document.getElementById('installation').value
    const suburbs = document.getElementById('suburbs').value
    const data = document.getElementById('data').value

    const objectSet = {}
    console.log(cname, speed, price, coverage, date, users, installation, suburbs)
    console.log(cname)
    if(cname !== "" && speed !== "" && price !== "" && coverage !== "" && date !== "" && users !== "" && installation !== "" && suburbs !== ""){
        objectSet.companyName = cname
        objectSet.speed = speed
        objectSet.price = price
        objectSet.data = data
        objectSet.coverage = coverage
        objectSet.date = date
        objectSet.users = genUsers()
        objectSet.router = installation
        objectSet.area = suburbs
        instanceFun.addISPDataFunction(objectSet)
        localStorage.setItem("dataset", JSON.stringify(instanceFun.getCompanyData()));
        alert("Data captured Successful 🧑🏾‍💻Thank you🤝")
    } else {
        alert("Please make sure all the fields are entered❌")
    }
})
