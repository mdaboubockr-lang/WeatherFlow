import SearchForm from './components/SearchForm'
import WeatherCard from './components/WeatherCard'
import { fetchWeather } from './services/weather'
import { fetchForecast } from './services/ForecastToday'
import { useState } from 'react'
import ForecastCard from './components/ForeCastCard'

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  async function handleSearch(city) {
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
      setCity("");
    }
    catch (error) {
      console.error(error);
    }
  }

  async function handleForecast(city) {
    try {
      const data = await fetchForecast(city);
      setForecastData(data);
      setCity("");
    }

    catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-4 py-10 text-white sm:px-6 lg:py-14">
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-9">
        <header className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Weather<span className="text-sky-400">Flow</span>
          </h1>
          <p className="text-sm text-slate-400">Your weather, at a glance</p>
        </header>

        <section className="mx-auto w-full max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">Weather updates</p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">Find weather for any city</h2>
          <p className="mb-7 text-sm text-slate-400 sm:text-base">Search a location to see its current conditions and forecast.</p>
          <SearchForm city={city} setCity={setCity} handleSearch={handleSearch} handleForecast={handleForecast} />
        </section>

        <main className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          {weatherData ? <WeatherCard data={weatherData} /> : null}
          {forecastData ? <ForecastCard data={forecastData} /> : null}
        </main>

        {!weatherData && !forecastData ? (
          <div className="mx-auto mt-2 max-w-md text-center">
            <div className="mb-3 text-5xl" aria-hidden="true">🌤️</div>
            <p className="text-sm text-slate-400">Your weather information will appear here after you search for a city.</p>
          </div>
        ) : null}

        <footer className="pt-2 text-center text-xs text-slate-500">
          Weather data powered by OpenWeatherMap
        </footer>
      </div>
    </div>
  )
}

export default App