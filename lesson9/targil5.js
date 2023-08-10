const imgU = document.createElement('img')

imgU.src = "https://cdn.pixabay.com/photo/2012/04/10/16/22/united-26177_640.png"
imgU.style.width = '50px'
imgU.style.height = '50px'

const imgK = document.createElement('img')
imgK.src = "https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898_640.jpg"
imgK.style.width = '50px'
imgK.style.height = '50px'

const imgI = document.createElement('img')
imgI.src = "https://cdn.pixabay.com/photo/2013/07/13/14/15/israel-162325_1280.png"
imgI.style.width = '50px'
imgI.style.height = '50px'


const countries = {
    USA: ['USA', 'Washington', '350M',
        ['Golden Bridge', 'NBA Game', 'Miami Beach']
        , 'USD', imgU],
    UK: ['UK', 'London', '80M', ['Buckingham palace', 'Big ben', 'Madam Toso']
        , 'Pond', imgK],
    Israel: ['Israel', 'Jerusalem', '9M', ['Kotel', 'Old City', 'Yafo'], 'ILS', imgI]


}

const table = document.getElementById('body');
let newR = document.createElement('tr');


for (const i in countries) {
    console.log(i);
    for (const j of countries[i]) {

        if (typeof j === 'object' && !Array.isArray(j)) {
            console.log(1)
            const newD = document.createElement('td');
            newD.appendChild(j);
            newR.appendChild(newD);
        }

        else {
            const newD = document.createElement('td');
            newD.textContent = j;
            newR.appendChild(newD);
        }

    }

    table.appendChild(newR);
    newR = document.createElement('tr');

}
