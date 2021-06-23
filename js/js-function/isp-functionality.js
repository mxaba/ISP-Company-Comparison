function ISPFunction(){

    let graphData = []

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

    function generateData(){
        return Math.floor(Math.random()*(999-0+1)+0)
    }

    function sortData(){
        graphData = []
        const data = companyData.filter(elem => {
            graphData.push({
                label: elem.companyName,
                data: [elem.price, generateData(), generateData(), generateData(), generateData(),generateData(), generateData(),generateData(), generateData(), generateData(), generateData(),generateData(), generateData(),generateData(), generateData(), generateData(), generateData(),generateData(), generateData()],
                borderColor: elem.color,
                fill: false
            })
            return ''
        })
        return graphData
    }

    return {
        sortData,
        getCompanyData,
        filterFunction
    }
}