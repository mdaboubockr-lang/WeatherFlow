export default function WeatherCard( { data } ) {
    if (!data) return null;

    const {name, main, weather, wind, sys} = data;
    const condition = weather[0];
    const icon = `https://openweathermap.org/img/wn/${condition.icon}@2x.png`;
    const description = condition.description;

    return (
        <div className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between gap-3">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">Current weather</p>
                    <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{name}, {sys.country}</h2>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Now</span>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-br from-blue-500/15 to-cyan-400/5 px-4 py-5 sm:px-5">
                <div>
                    <p className="text-5xl font-bold tracking-tight text-white sm:text-6xl">{Math.round(main.temp)}°<span className="text-3xl text-sky-300">C</span></p>
                    <p className="mt-2 capitalize text-slate-300">{description}</p>
                    <p className="mt-3 text-sm text-slate-400">Feels like <span className="font-semibold text-slate-200">{Math.round(main.feels_like)}°C</span></p>
                </div>
                <img src={icon} alt={condition.description} className="h-24 w-24 shrink-0 drop-shadow-lg sm:h-28 sm:w-28" />
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/5 bg-slate-950/30 p-4">
                    <p className="text-xs text-slate-400">Humidity</p>
                    <p className="mt-2 text-lg font-semibold text-white">{main.humidity}%</p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-slate-950/30 p-4">
                    <p className="text-xs text-slate-400">Wind speed</p>
                    <p className="mt-2 text-lg font-semibold text-white">{wind.speed} <span className="text-xs font-normal text-slate-400">m/s</span></p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-slate-950/30 p-4">
                    <p className="text-xs text-slate-400">Pressure</p>
                    <p className="mt-2 text-lg font-semibold text-white">{main.pressure} <span className="text-xs font-normal text-slate-400">hPa</span></p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-slate-950/30 p-4">
                    <p className="text-xs text-slate-400">Condition</p>
                    <p className="mt-2 truncate text-lg font-semibold capitalize text-white">{condition.main}</p>
                </div>
            </div>
        </div>
    )

}
