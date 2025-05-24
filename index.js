// index.js

// Step 1: Fetch Data from the API
// - Create a function `fetchWeatherData(city)`
// - Use fetch() to retrieve data from the OpenWeather API
// - Handle the API response and parse the JSON
// - Log the data to the console for testing
function fetchWeatherData(city){
   const key = "348eceb05c8b6496bebb91faf859d407"; 
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)

    .then(response =>{
        if (!response.ok){
            displayError('Network response was not ok');
            throw new Error('Network response was not ok');
        
        }
        console.log("has response");
        return response.json();
    })
    .then(data => {
        console.log('Weather Data',data);
        displayWeather(data);
    })
.catch(error =>{
    console.error('Fetch error;', error);

})}
function displayWeather(data){
    const weatherContainer = document.getElementById('weather-display');
    debugger;
    weatherContainer.innerHTML = "";
    const city = data.name || 'Unknown city';
    const country = data?.sys?.country || 'N/A';
    const temperature = data?.main?.humidity ?? 'N/A';
    const humidity = data?. main?.humidity ?? 'N/A';
    const description = data?.weather?.[0]?.description || 'N/A';
    const windSpeed = data?.wind?.speed ?? 'N/A';
    
    const content = `
    <h2>Weather in ${city}, ${country}</h2>
    <ul>
    <li>Temperature: ${temperature} C</li>
    <li>Humidity: ${humidity}%</li>
    <li>Description: ${capitilizeFirstLetter(description)}</li>
    <li>Wind Speed: ${windSpeed} m/s</li>
    </ul>
        `;
    
        weatherContainer.innerHTML = content;
}
function capitilizeFirstLetter(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}
const fetchBtn = document.getElementById('fetch-weather');
const cityInput = document.getElementById('city-input');
fetchBtn.addEventListener('click', () => {
    //debugger;
    const city = cityInput.value.trim(); 
    if (!city){
        displayError('Please enter a city name.');
        return;
    }
    fetchWeatherData(city);

});
function displayError(message){
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = message;
    errorElement.classList.add('error');
    

}

// Step 4: Implement Error Handling
// - Create a function `displayError(message)`
// - Handle invalid city names or network issues
// - Dynamically display error messages in a dedicated section of the page

// Step 5: Optimize Code for Maintainability
// - Refactor repetitive code into reusable functions
// - Use async/await for better readability and to handle asynchronous operations
// - Ensure all reusable functions are modular and clearly named

// BONUS: Loading Indicator
// - Optionally, add a loading spinner or text while the API request is in progress

// BONUS: Additional Features
// - Explore adding more features, such as displaying additional weather details (e.g., wind speed, sunrise/sunset)
// - Handle edge cases, such as empty input or API rate limits

// Event Listener for Fetch Button
// - Attach the main event listener to the button to start the process
