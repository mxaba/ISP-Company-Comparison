// eslint-disable-next-line no-unused-vars
function genUsers(){
    return Math.floor(Math.random()*(999999-200+1)+200)
}

function dataCal(){
    const objectData = [{
        companyName: "Telkom",
        day: ["Morning", "Afternoon", "Evening"],
        speed: [25, 50, 100],
        location: "Belhar",
        hidden: true
    }]

    return objectData
}

function dataSet() {
  const companyObject = [{
          companyName: "Telkom",
          speed: "25Mbps, 50Mbps, 100Mbps, 200Mbps",
          price: "R449, R699, R899, R1 169",
          data: "uncapped",
          coverage: "Eastern Cape, Free State, Gauteng, KwaZulu-Natal, Limpopo, Mpumalanga, Northern Cape, Western Cape, North West",
          date: '12-09-1997',
          users: genUsers(),
          router: 'Included & Plug & Play',
          color: 'red',
          area: "Atlantic Seaboard, Klipfontein District (Old Cape Flats), City Bowl, Helderberg, Northern Suburbs, South Peninsula, Southern Suburbs, Western Suburbs",
      },
      {
          companyName: "Vodacom",
          speed: "25Mbps, 50Mbps, 100Mbps, 200Mbps",
          price: "R350, R567, R790, R1 091",
          data: "capped",
          coverage: "Eastern Cape, Gauteng, KwaZulu-Natal, Limpopo, Mpumalanga, Northern Cape, Western Cape, North West",
          date: '11-04-1763',
          users: genUsers(),
          router: 'Included & Fully installed',
          color: 'blue',
          area: "Klipfontein District (Old Cape Flats), City Bowl, Helderberg, Northern Suburbs, South Peninsula, Southern Suburbs, Western Suburbs",
      },
      {
          companyName: "MTN",
          speed: "25Mbps, 50Mbps, 100Mbps, 200Mbps",
          price: "R750, R967, R1 290, R1 691",
          data: "uncapped",
          coverage: "Eastern Cape, Gauteng, KwaZulu-Natal, Limpopo, Mpumalanga, Northern Cape, Western Cape, North West",
          date: '12-09-2018',
          users: genUsers(),
          router: 'Installation',
          color: 'green',
          area: "Atlantic Seaboard, Klipfontein District (Old Cape Flats), Southern Suburbs, Western Suburbs",
      },
      {
          companyName: "Rain",
          speed: "25Mbps, 50Mbps, 100Mbps, 200Mbps",
          price: "R250, R467, R899, R1 101",
          data: "uncapped",
          coverage: "Eastern Cape, Gauteng, KwaZulu-Natal, Limpopo, Mpumalanga, Northern Cape, Western Cape, North West",
          date: '12-09-1879',
          users: genUsers(),
          router: 'Included & Fully installed',
          color: 'grey',
          area: "Western Suburbs",
      },
      {
          companyName: "Afrihost",
          speed: "25Mbps, 50Mbps, 100Mbps, 200Mbps",
          price: "R550, R667, R907, R1 202",
          data: "capped",
          coverage: "Eastern Cape, Gauteng, KwaZulu-Natal, Limpopo, Mpumalanga, Northern Cape, Western Cape, North West",
          date: '11-10-1977',
          users: genUsers(),
          router: 'Included & Plug & Play',
          color: 'Turquoise',
          area: "Atlantic Seaboard, Klipfontein District (Old Cape Flats), City Bowl, Helderberg, Northern Suburbs, South Peninsula, Southern Suburbs, Western Suburbs",
      },{
          companyName: "TooMuchWifi",
          speed: "25Mbps, 50Mbps, 100Mbps, 200Mbps",
          price: "R650, R767, R890, R989",
          data: "uncapped",
          coverage: "Western Cape",
          date: '09-05-2018',
          users: genUsers(),
          router: 'Installation',
          color: 'gold',
          area: "Bishop Lavis, Bonteheuwel, Crawford, Crossroads, Epping, Gugulethu, Hanover Park, Kalksteenfontein, Khayelitsha, Langa, Lavender Hill, Manenberg Mitchells Plain, Nyanga, Ottery, Pelican Park, Philippi, Samora Machel, Strandfontein, Valhalla Park, Vrygrond",
      }, {
          companyName: "Open serve",
          speed: "25Mbps, 50Mbps, 100Mbps, 200Mbps",
          price: "R609, R877, R987, R1 691",
          data: "capped",
          coverage: "Eastern Cape, Gauteng, KwaZulu-Natal, Limpopo, Mpumalanga, Northern Cape, Western Cape, North West",
          date: '11-01-2004',
          users: genUsers(),
          router: 'Included & Plug & Play',
          color: 'yellow',
          area: "Atlantic Seaboard, Klipfontein District (Old Cape Flats), City Bowl, Helderberg, Northern Suburbs, South Peninsula, Southern Suburbs, Western Suburbs",
      },
  ];

  return companyObject;
}