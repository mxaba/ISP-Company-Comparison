function ISPFunction() {

    let graphData = []

    var companyData = []
    var dataCapured = []
    let pieData = []
    let pieDataG = []
    let searchValue = ''
    let searchValueNet = ''
    let dataFilteredArray = []

    function getCompanyData() {
        return companyData
    }

    function setCompanyData(name) {
        companyData = name
    }

    function filterFunction(name) {
        const dataFiltered = companyData.filter(elem => {
            return elem.companyName.toLowerCase().includes(name.toLowerCase()) || elem.router.toLowerCase().includes(name.toLowerCase()) || elem.area.toLowerCase().includes(name.toLowerCase()) || elem.data.toLowerCase().includes(name.toLowerCase()) || elem.price.toLowerCase().includes(name.toLowerCase())
        })
        return dataFiltered
    }

    function setValueOfPie(name, nameN) {
        searchValue = name
        searchValueNet = nameN
    }

    function filterGraphFunction(name, nameNet) {
        dataFilteredArray = []
        if (name != "" && nameNet != "" ) {
            const dataFiltered = dataCapured.filter(element => {
                if(element.location.toLowerCase().includes(nameNet) && element.companyName.toLowerCase().includes(name)){
                    dataFilteredArray.push({
                        companyName: element.companyName ,
                        day: element.day,
                        speed: element.speed,
                        location: element.location,
                        hidden: element.hidden
                    })
                }
                return ''
                // return element.location.toLowerCase().includes(name) || element.companyName.toLowerCase().includes(name)
            })
            return dataFilteredArray
        }

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

    function filterPieFunction() {
        pieData = filterGraphFunction(searchValue, searchValueNet)
        pieDataG = []
        var slow = 0
        var fast = 0
        var normal = 0
        var supper = 0
        const pieDataf = pieData.filter(elem => {


            elem.speed.forEach(element => {
                if (element == 25) {
                    slow++
                } if (element == 50) {
                    fast++
                } if (element == 100) {
                    normal++
                }
                if (element == 200) {
                    supper++
                }
            });

            if (elem.location.toLowerCase().includes(searchValueNet) && elem.companyName.toLowerCase().includes(searchValue)) {
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

    function graDataDisplay() {
        graphData = []

        const data = dataCapured.filter(elem => {
            graphData.push({
                label: elem.companyName + ' @ ' + elem.location,
                hidden: elem.hidden,
                data: elem.speed,
                borderColor: getRandomColor()
            })
            return ''
        })
        return graphData
    }

    function getDataCapured() {
        return dataCapured
    }

    function setDataCapured(name) {
        dataCapured = name
    }

    function addDataFunction(objectPassed) {
        dataCapured.push({
            companyName: objectPassed.companyName,
            hidden: true,
            day: [objectPassed.morning, objectPassed.afternoon, objectPassed],
            speed: [objectPassed.morningspeed, objectPassed.afternoonspeed, objectPassed.eveningspeed],
            location: objectPassed.placeentered
        })
    }

    function addISPDataFunction(objectPassed) {

        const exist = companyData.filter((data) => objectPassed.companyName.toLowerCase() == data.companyName.toLowerCase());
        if (exist.length == 0) {
            companyData.push({
                companyName: objectPassed.companyName,
                speed: objectPassed.speed,
                price: objectPassed.price,
                data: objectPassed.data,
                coverage: objectPassed.coverage,
                date: objectPassed.date,
                users: genUsers(),
                router: objectPassed.router,
                color: 'green',
                area: objectPassed.area,
            })
            return true
        }
        
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
        filterPieFunction,
        addISPDataFunction,
        setCompanyData
    }
}