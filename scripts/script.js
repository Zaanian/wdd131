function calculateWindChill() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const windSpeed = parseFloat(document.getElementById('windSpeed').value);
    const resultElement = document.getElementById('result');

    // Validate input
    if (isNaN(temperature) || isNaN(windSpeed)) {
        resultElement.textContent = "Please enter valid numbers for temperature and wind speed.";
        return;
    }

    // Wind chill is only defined for temperatures at or below 50°F and wind speeds above 3 mph.
    if (temperature > 50 || windSpeed <= 3) {
        resultElement.textContent = "Wind chill is not applicable for these conditions.";
        return;
    }

    // Wind Chill Formula (US units: Fahrenheit and mph)
    // WCI = 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16)
    // Where T = Temperature in degrees Fahrenheit and V = wind speed in miles per hour.
    const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));

    resultElement.textContent = `The Wind Chill is: ${Math.round(windChill)}°F`;
}