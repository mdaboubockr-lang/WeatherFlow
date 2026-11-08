export default function SearchForm() {
    return (
        <form className="flex gap-2">
            <input
            placeholder="Search a city..." 
            className="flex-1 rounded-lg border border-gray-300 px-4 outline-none focus:border-blue-500"
            />

            <button
            type="submit"
            className="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
            >
Search
            </button>
        </form>
    )
}