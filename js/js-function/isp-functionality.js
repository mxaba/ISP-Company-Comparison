function ISPFunction(){

    var companyData = dataSet()

    function getCompanyData(){
        return companyData
    }

    function filterFunction(name){
        const dataFiltered = companyData.filter(elem => {
            return elem.companyName.toLowerCase().includes(name.toLowerCase()) || elem.instructions.toLowerCase().includes(name.toLowerCase()) || elem.area.toLowerCase().includes(name.toLowerCase()) || parseFloat(elem.price) < parseFloat(name) 
        })
        return dataFiltered
    }

    return {
        getCompanyData,
        filterFunction
    }
}