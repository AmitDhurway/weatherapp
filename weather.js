async function getWeather() {
    try {
        const cityName = document.getElementById('city-input').value;
        
        // Make API call to fetch weather data
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${cityName}`);
        const data = await response.json();
        
        // Extract relevant weather information
        const temperature = `${data.current.temp_c}°C`;
        const description = data.current.condition.text;
        
        // Update DOM elements with weather data
        document.getElementById('city-name').textContent = cityName;
        document.getElementById('temperature').textContent = temperature;
        document.getElementById('description').textContent = description;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        // Handle error here, such as displaying an error message to the user
    }
}
