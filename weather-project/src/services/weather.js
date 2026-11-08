const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeather(city) {
    const response = await fetch(`${BASE_URL}?q=${city}&units=metric&appid=${KEY}`);
    if (!response.ok) {
        if (response.status === 401) {
            throw new Error("Invalid API key. Please check your API key.");
        }
        if (response.status === 404) {
            throw new Error("City not found. Please check the city name.");
        }
        if (response.status === 500) {
            throw new Error("Internal server error. Please try again later.");
        }
        throw new Error("Something went wrong. Please try again later.");
    }
    const data = await response.json();
    return data;
}