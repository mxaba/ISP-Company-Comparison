function ISPFunction(){

    var companyData = dataSet()

    function getCompanyData(){
        return companyData
    }

    function filterFunction(name){
        const dataFiltered = companyData.filter(elem => {
            return elem.companyName.includes(name) || elem.instructions.includes(name) || elem.area.includes(name) || Number(elem.price) <= Number(name) 
        })
        return dataFiltered
    }

    return {
        getCompanyData,
        filterFunction
    }
}