// Set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

//get the last modified date
const lastmodifieddate= document.lastModified
document.getElementById("lastmodified").textContent = ("Last modified " + lastmodifieddate)

//windchill calculation

function calculateWindChill(){
const temperature = 70;
const windSpeed = 4.5;

const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));

}

