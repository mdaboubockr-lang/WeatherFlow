import SearchForm from './components/SearchForm'
import WeatherCard from './components/WeatherCard'
import { fetchWeather } from './services/weather'
import { useState } from 'react'

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  async function handleSearch(city) {
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
      setCity("");
    }
    catch (error ) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl text-center text-black mb-5 font-bold">
          Weather App
        </h1>
        <SearchForm />
        <WeatherCard />
      </div>
    </div>
  )
}

export default App
