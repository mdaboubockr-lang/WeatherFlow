export default function ForecastCard({ data }) {
    return (
        <div className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7">
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">Upcoming hours</p>
                <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">Today's Forecast</h2>
                <p className="mt-1 text-sm text-slate-400">Weather outlook for the next few hours</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {data.list.slice(0, 5).map((forecast, index) => (
                    <div key={index} className="flex flex-col items-center rounded-2xl border border-white/5 bg-slate-950/30 px-3 py-4 text-center transition hover:border-sky-400/30 hover:bg-slate-900/60">
                        <p className="text-sm font-semibold text-slate-200">
                            {new Date(forecast.dt_txt).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </p>

                        <img
                            src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                            alt={forecast.weather[0].description}
                            className="my-2 h-16 w-16 drop-shadow-md"
                        />

                        <p className="text-xl font-bold text-white">
                            {Math.round(forecast.main.temp)}°C
                        </p>
                        <p className="mt-1 line-clamp-1 text-xs capitalize text-slate-400">
                            {forecast.weather[0].description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
