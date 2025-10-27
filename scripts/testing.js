const message = document.querySelector('#message');
const input = document.querySelector('#favchap');





let scores = [56, 78, 95, 77, 65, 86];
let target = scores.indexOf(78);




const scoress = [99, 88, 93, 70, 84, 69];

const outreach = scoress.filter(total => total < 70);


const countries = ["Canada", "Chili", "Colombia", "Croatia", "Costa Rica"];
const countriesLong = countries.filter((country) => country.length > 7);

console.log(countriesLong)

const section = document.createElement('section');
const h3 = document.createElement('h3');
h3.textContent = 'Relief Society';
section.appendChild(h3);

