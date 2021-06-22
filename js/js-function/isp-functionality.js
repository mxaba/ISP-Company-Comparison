function ISPFunction(){

    var companyData = dataSet()

    function getCompanyData(){
        return companyData
    }

    return {
        getCompanyData
    }
}