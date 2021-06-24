function ISPFunction(){

    let graphData = []

    var companyData = dataSet()
    var dataCapured = []
    let pieData = []
    let pieDataG = []
    let searchValue = ''

    function getCompanyData(){
        return companyData
    }

    function filterFunction(name){
        const dataFiltered = companyData.filter(elem => {
            return elem.companyName.toLowerCase().includes(name.toLowerCase()) || elem.router.toLowerCase().includes(name.toLowerCase()) || elem.area.toLowerCase().includes(name.toLowerCase()) || elem.data.toLowerCase().includes(name.toLowerCase()) || elem.price.toLowerCase().includes(name.toLowerCase()) 
        })
        return dataFiltered
    }

    function setValueOfPie(name){
        searchValue = name
    }

    function filterGraphFunction(name){
        const dataFiltered = dataCapured.filter(element => {
            return element.location.toLowerCase().includes(name) || element.companyName.toLowerCase().includes(name) 
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

    function filterPieFunction(){
        pieData = filterGraphFunction(searchValue)
        pieDataG = []
        var slow = 0
        var fast = 0
        var normal = 0
        var supper = 0
        const pieDataf = pieData.filter(elem => {
            

            elem.speed.forEach(element => {
                if (element == 25){
                    slow++
                } if (element == 50){
                    fast++
                } if (element == 100){
                    normal++
                }
                if (element == 200){
                    supper++
                } 
            });

            if(elem.location.toLowerCase().includes(searchValue) || elem.companyName.toLowerCase().includes(searchValue)) {
                pieDataG.push({
                    label: elem.companyName + ' @ ' + elem.location,
                    data: [slow, fast, normal, supper],
                    backgroundColor: [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()],
                    hoverOffset: 10
                })

            }
            return ''
        })
        return pieDataG
    }

    function graDataDisplay(){
        graphData = []
        
        const data = dataCapured.filter(elem => {
            graphData.push({
                label: elem.companyName + ' @ '+ elem.location,
                hidden: elem.hidden,
                data: elem.speed,
                borderColor: getRandomColor()
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
        filterFunction,
        setValueOfPie,
        filterPieFunction
    }
}