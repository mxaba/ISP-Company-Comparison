function ISPFunction(){

    let graphData = []

    var companyData = dataSet()
    var dataCapured = []

    function getCompanyData(){
        return companyData
    }

    function filterFunction(name){
        const dataFiltered = companyData.filter(elem => {
            return elem.companyName.toLowerCase().includes(name.toLowerCase()) || elem.router.toLowerCase().includes(name.toLowerCase()) || elem.area.toLowerCase().includes(name.toLowerCase()) || elem.price.toLowerCase().includes(name.toLowerCase()) 
        })
        return dataFiltered
    }

    function filterGraphFunction(name){
        const dataFiltered = dataCapured.filter(elem => {
            return elem.companyName.toLowerCase().includes(name) || elem.location.toLowerCase().includes(name) 
        })
        return dataFiltered
    }

    function getRandomNumber(low, high) {
        var r = Math.floor(Math.random() * (high - low + 1)) + low;
        return r;
      }

    function getRandomColor() {
        var characters = "0123456789ABCDEF";
        var color = '#';
      
        for (var i = 0; i < 6; i++) {
          color += characters[getRandomNumber(0, 15)];
        }
        
        return color;
      }

    function graDataDisplay(){
        graphData = []
        const data = dataCapured.filter(elem => {
            graphData.push({
                label: elem.companyName + ' @ '+ elem.location,
                hidden: elem.hidden,
                data: elem.speed,
                borderColor: getRandomColor(),
                fill: true
            })
            return ''
        })
        return graphData
    }

    function getDataCapured(){
        return dataCapured
    }

    function setDataCapured(name){
        dataCapured = name
    }

    function addDataFunction(objectPassed){
        dataCapured.push({
            companyName: objectPassed.companyName,
            hidden: true,
            day: [objectPassed.morning, objectPassed.afternoon, objectPassed],
            speed: [objectPassed.morningspeed, objectPassed.afternoonspeed, objectPassed.eveningspeed],
            location: objectPassed.placeentered
        })
    }

    return {
        filterGraphFunction,
        addDataFunction,
        setDataCapured,
        getDataCapured,
        graDataDisplay,
        getCompanyData,
        filterFunction
    }
}