// eslint-disable-next-line no-unused-vars
function genMath(){
    return Math.floor(Math.random()*(999-0+1)+0)
}

function genUsers(){
    return Math.floor(Math.random()*(999999-200+1)+200)
}

function dataSet() {
  const companyObject = [{
          companyName: "Telkom",
          speed: genMath(),
          price: genMath(),
          coverage: genMath(),
          date: '12-09-1997',
          users: genUsers(),
          instructions: 'No',
          color: 'red',
          area: "Atlantic Seaboard, Klipfontein District (Old Cape Flats), City Bowl, Helderberg, Northern Suburbs, South Peninsula, Southern Suburbs, Western Suburbs",
      },
      {
          companyName: "Vodacom",
          speed: genMath(),
          price: genMath(),
          coverage: genMath(),
          date: '11-04-1763',
          users: genUsers(),
          instructions: 'Yes',
          color: 'blue',
          area: "Klipfontein District (Old Cape Flats), City Bowl, Helderberg, Northern Suburbs, South Peninsula, Southern Suburbs, Western Suburbs",
      },
      {
          companyName: "MTN",
          speed: genMath(),
          price: genMath(),
          coverage: genMath(),
          date: '12-09-2018',
          users: genUsers(),
          instructions: 'No',
          color: 'green',
          area: "Atlantic Seaboard, Klipfontein District (Old Cape Flats), Southern Suburbs, Western Suburbs",
      },
      {
          companyName: "Rain",
          speed: genMath(),
          price: genMath(),
          coverage: genMath(),
          date: '12-09-1879',
          users: genUsers(),
          instructions: 'No',
          color: 'grey',
          area: "Western Suburbs",
      },
      {
          companyName: "Afrihost",
          speed: genMath(),
          price: genMath(),
          coverage: genMath(),
          date: '11-10-1977',
          users: genUsers(),
          instructions: 'Yes',
          color: 'Turquoise',
          area: "Atlantic Seaboard, Klipfontein District (Old Cape Flats), City Bowl, Helderberg, Northern Suburbs, South Peninsula, Southern Suburbs, Western Suburbs",
      },{
          companyName: "TooMuchWifi",
          speed: genMath(),
          price: genMath(),
          coverage: genMath(),
          date: '09-05-2018',
          users: genUsers(),
          instructions: 'Yes',
          color: 'gold',
          area: "Bishop Lavis, Bonteheuwel, Crawford, Crossroads, Epping, Gugulethu, Hanover Park, Kalksteenfontein, Khayelitsha, Langa, Lavender Hill, Manenberg Mitchells Plain, Nyanga, Ottery, Pelican Park, Philippi, Samora Machel, Strandfontein, Valhalla Park, Vrygrond",
      }, {
          companyName: "Open serve",
          speed: genMath(),
          price: genMath(),
          coverage: genMath(),
          date: '11-01-2004',
          users: genUsers(),
          instructions: 'Yes',
          color: '',
          area: "Atlantic Seaboard, Klipfontein District (Old Cape Flats), City Bowl, Helderberg, Northern Suburbs, South Peninsula, Southern Suburbs, Western Suburbs",
      },
  ];

  return companyObject;
}