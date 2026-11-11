export default function SearchForm({ city, setCity, handleSearch, handleForecast }) {

    function handleSubmit(e) {
        e.preventDefault();
        const cityName = city.trim();
        if (!cityName) return;

        handleSearch(cityName);
        handleForecast(cityName);
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.07] p-2 shadow-2xl shadow-black/20 backdrop-blur-xl sm:flex-row">
            <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name..."
                className="min-w-0 flex-1 rounded-xl bg-transparent px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-sky-400/40"
            />

            <button
                type="submit"
                className="rounded-xl bg-sky-500 px-7 py-3 font-semibold text-white shadow-lg shadow-sky-950/40 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
                Search
            </button>
        </form>
    )
}
